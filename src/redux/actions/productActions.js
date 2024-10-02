import { actionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const setTab = (tab) => {
    return {
        type: actionTypes.SET_TAB,
        payload: tab,
    }
}

export const removeProducts = () => {
    return {
        type: actionTypes.REMOVE_PRODUCTS,
    }
}

export const selectedProducts = (products) => {
    return {
        type: actionTypes.SELECTED_PRODUCTS,
        payload: products,
    }
}

export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product,
    }
}
export const updateCart = (productS) => {
    return {
        type: actionTypes.UPDATE_CART_ITEMS,
        payload: productS,
    }
}

export const removeSelectedProducts = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}

export const setCategories = (categories) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        payload: categories
    }
}