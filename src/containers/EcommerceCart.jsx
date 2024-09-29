import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/actions/productActions";

const EcommerceCart = () => {
    const dispatch = useDispatch();
    const [cartAmount, setCartAmount] = useState({
        price: 0,
        discount: 0,
        deliveryCharges: 0,
        total: 0
    })
    const cartItems = useSelector(state => state.allProducts.ecommerceCart);

    useEffect(() => {
        // Calculate price, discount, delivery charges, and total
        const price = cartItems.reduce((total, data) => total + (data.price * (data?.quantity || 1)), 0) || 0;
        const discount = cartItems.length * 5 || 0;
        const deliveryCharges = cartItems.length * 2 || 0;
        const total = price + deliveryCharges - discount;

        // Set these calculated values in the state
        setCartAmount({
            price,
            discount,
            deliveryCharges,
            total
        });
    }, [cartItems]);

    // Add or delete product
    const productUpdate = (id, param) => {
        cartItems.forEach(element => {
            if (id == element.id) {
                if (param == "plus") {
                    element.quantity = (element.quantity || 1) + 1;
                    return;
                } else {
                    if (element.quantity >= 1) {
                        element.quantity = (element.quantity || 1) - 1;
                        return;
                    }
                }
            }
        });
        dispatch(updateCart(cartItems))
    }

    // Remove the product from cart
    const removeProduct = (id) => {
        cartItems.forEach((element, index) => {
            if (id == element.id) {
                cartItems.splice(index, 1);
                return;
            }
        });
        dispatch(updateCart(cartItems))
    }
    return (
        <div className="container" style={{ marginTop: "4.5rem" }}>
            <div className="row">
                <div className="col-8 mt-5 p-3" style={{ backgroundColor: "white" }}>
                    <h5>CART ITEMS</h5>
                    <hr class="solid"></hr>
                    {cartItems.length > 0 ? cartItems.map(data => (
                        <>
                            <div className='col-12'>
                                <div className='d-flex flex-row' key={data.id} style={{ color: "black", backgroundColor: "white" }}>
                                    <img src={data.image} alt={data.title} style={{ width: "auto", height: "180px", borderRadius: "5px" }} />
                                    <div className="d-flex flex-column" style={{ padding: "30px 10px 30px 10px", flexGrow: 1 }}>
                                        <div className='d-flex flex-row justify-content-between'>
                                            <div className='header text-ellipsis-title w-75' title={data.title}>{data.title}</div>
                                            <div className='ml-auto mr-3 meta price'>$ {data.price}</div>
                                            <i className="fa fa-trash text-danger" aria-hidden="true" style={{ marginTop: "0px", fontSize: "20px" }} onClick={() => { removeProduct(data.id) }}></i>
                                        </div>
                                        <div className="mt-auto d-flex">
                                            <span style={{ border: "1px solid #333", padding: "6px", borderRadius: "5px" }}>
                                                <i className="fa fa-minus ml-2 mr-2" aria-hidden="true" onClick={() => productUpdate(data.id, "minus")}></i>
                                                {data?.quantity || 1}
                                                <i className="fa fa-plus mr-2 ml-2" aria-hidden="true" onClick={() => productUpdate(data.id, "plus")}></i>
                                            </span>
                                            <div className='ml-3 mt-2 meta price'>$ {data.price * (data?.quantity || 1)}</div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                            </div>
                            <div className="text-right">
                                <button className="btn btn-success">Place Order</button>
                            </div>
                        </>
                    ))
                        : <div className="col-12 d-flex flex-column justify-content-center" style={{ alignItems: "center" }}>
                            <img src="https://static.vecteezy.com/system/resources/previews/005/006/007/non_2x/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" style={{ width: "130px", backgroundColor: "red" }} />
                            <span>Your Cart is Empty</span>
                        </div>
                    }

                </div>
                <div className="col-4 mt-5">
                    <div className='col-12 p-3' style={{ color: "black", backgroundColor: "white" }}>
                        <h5>PRICE DETAILS</h5>
                        <hr class="solid"></hr>
                        <div className='p-3'>
                            <div className="d-flex justify-content-between w-100 mb-3">
                                <div>Price ({cartItems.length} Items)</div>
                                <div>${cartAmount.price}</div>
                            </div>
                            <div className="d-flex justify-content-between w-100 mb-3">
                                <div>Discount</div>
                                <div className="text-success">- ${cartAmount.discount}</div>
                            </div>
                            <div className="d-flex justify-content-between w-100 mb-3">
                                <div>Delivery Charges</div>
                                <div>${cartAmount.deliveryCharges}</div>
                            </div>
                            <hr class="solid"></hr>
                            <div className="d-flex justify-content-between w-100">
                                <div><b>Total</b></div>
                                <div><b>${cartAmount.total}</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EcommerceCart