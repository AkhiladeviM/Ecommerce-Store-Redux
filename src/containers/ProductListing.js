import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import Header from './Header';
const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProductList = async () => {
        const response = await axios.get("https://fakestoreapi.in/api/products").catch((err) => {
            console.log("err = ", err);
        });
        dispatch(setProducts(response.data.products));
    }
    useEffect(() => {
        fetchProductList();
    }, [])
    return (
        <div>
            <Header />
            <div className='ui grid container-fluid' style={{ marginTop: "0.01rem", marginBottom: "1rem", marginLeft: "auto" }}>
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing