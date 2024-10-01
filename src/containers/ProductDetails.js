import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";
import toast from "react-hot-toast";
import { selectedProducts, removeSelectedProducts, addToCart } from '../redux/actions/productActions';

const ProductDetails = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const [isDisbaled, setIsDisabled] = useState[false];

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
        <>
            {Object.keys(product).length === 0 ?
                <div className='row' style={{ height: "100vh" }}>
                    <div className='col loader'>
                        < PropagateLoader />
                    </div>
                </div>
                :
                <div className="container" style={{ marginTop: "5rem", background: "white" }}>
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
                            <div className="ui vertical animated button" tabIndex="0" onClick={() => { dispatch(addToCart(product)); toast.success('Added Successfully!') }}>
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetails