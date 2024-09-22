import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { selectedProducts, removeSelectedProducts, addToCart } from '../redux/actions/productActions';

const ProductDetails = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const productDetails = await axios.get("https://fakestoreapi.in/api/products/" + productId).catch(err => {
            console.log(err)
        })
        dispatch(selectedProducts(productDetails.data.product));
    }
    useEffect(() => {
        productId && productId !== null && fetchProductDetails();
        return () => {
            dispatch(removeSelectedProducts());
        };
    }, []);
    return (
        // <div className="container" style={{ marginTop: "4.5rem", backgroundColor:"red" }}>
        // {/* {Object.keys(product).length === 0 ? (
        //     <div>...Loading</div>
        // ) : ( */}
        <div className="container" style={{ marginTop: "6rem" }}>
            {console.log("cart = ", useSelector((state) => state.ecommerceCart))}
            {/* <div className="ui two column stackble aligned grid" style={{ textAlign: "center" }} > */}
            {/* <div className="ui vertical divider">AND</div> */}
            <div className="row" style={{ marginTop: "20px", borderRadius: "5px", border: "1px solid #cfcfcf" }}>
                <div className="col-md-6 lp">
                    <img className="image" src={image} />
                </div>
                <div className="col-md-6 rp">
                    <h1>{title}</h1>
                    <h2>
                        <a className="ui teal tag label">$ {price}</a>
                    </h2>
                    <h3 className="ui block header">{category}</h3>
                    <p className='text-ellipsis' title={description}>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0" onClick={() => dispatch(addToCart(product))}>
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
        // </div>

        //         {/* // <div className='five wide column'>
        //             //     <div className='ui link cards'>
        //             //         <div className="ui vertical divider">AND</div>
        //             //         <div className='card'>
        //             //             <div className='image'>
        //             //                 <img src={image} alt={title} />
        //             //             </div>
        //             //             <div className='content'>
        //             //                 <div className='header'>{title}</div>
        //             //                 <div className='meta price'>$ {price}</div>
        //             //                 <div className='meta'>{category}</div>
        //             //             </div>
        //             //         </div>
        //             //     </div>
        //             // </div> */}

        // {/* // )} */ }
        //     // </div>
    )
}

export default ProductDetails