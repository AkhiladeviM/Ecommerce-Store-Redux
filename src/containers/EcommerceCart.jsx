import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/actions/productActions";

const EcommerceCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.allProducts.ecommerceCart);

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
        <div className="container-fluid" style={{ marginTop: "4.5rem", marginLeft: "1rem" }}>
            <div className="row">
                <div className="col-8" style={{ backgroundColor: "lightGreen" }}>
                    <h1>Hello</h1>
                    {cartItems.map(data => (
                        <div className='col-12'>
                            <div className='d-flex flex-row mb-1' key={data.id} style={{ color: "black", borderRadius: "6px", backgroundColor: "white" }}>
                                <img src={data.image} alt={data.title} style={{ width: "auto", height: "180px", borderRadius: "5px" }} />
                                <div className="d-flex flex-column" style={{ padding: "30px 30px 30px 10px", flexGrow: 1 }}>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className='header text-ellipsis-title' title={data.title}>{data.title}</div>
                                        <div className='ml-auto mr-3 meta price'>$ {data.price}</div>
                                        <i className="fa fa-trash" aria-hidden="true" style={{ marginTop: "0px", fontSize: "20px" }} onClick={() => { removeProduct(data.id) }}></i>
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
                        </div>
                    ))}
                </div>
                <div className="col-4" style={{ backgroundColor: "lightGreen" }}>
                    <h1>Details</h1>
                    <div className='col-12'>
                        <div className='d-flex flex-row mb-1' style={{ color: "black", borderRadius: "6px", backgroundColor: "white" }}>
                            <h1>jnubub</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EcommerceCart