import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setProducts,removeProducts } from '../redux/actions/productActions';
import { capitalize } from '../helper';
const Header = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await axios.get("https://fakestoreapi.in/api/products/category").catch((err) => {
            console.log("err = ", err);
        });
        dispatch(setCategories(response.data.categories));
    }
    const fetchCategoryList = async (category) => {
        dispatch(removeProducts());
        const response = await axios.get("https://fakestoreapi.in/api/products/category?type=" + category).catch((err) => {
            console.log("err = ", err);
        });
        dispatch(setProducts(response.data.products));
    }
    const fetchProductList = async () => {
        dispatch(removeProducts());
        const response = await axios.get("https://fakestoreapi.in/api/products").catch((err) => {
            console.log("err = ", err);
        });
        dispatch(setProducts(response.data.products));
    }

    const categories = useSelector((state) => state.allProducts.categories);
    const renderList = categories.map((category, id) => {
        return (
            <div className='col-1' key={id} onClick={() => fetchCategoryList(category)}>
                <div className='categoriesText'>{capitalize(category)}</div>
            </div>
        )
    })
    return (
        <div className='container-fluid categoriesContainer'>
            <div className='row categories'>
                <div className='col-1' onClick={() => fetchProductList()}>
                    <div className='categoriesText'>All</div>
                </div>
                {renderList}
            </div>
        </div>
    )
}
export default Header