import { actionTypes } from "../constants/actionTypes";
const initialState = {
    products: [],
    categories: [],
    ecommerceCart: []
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case actionTypes.REMOVE_PRODUCTS:
            return { ...state, products: [] }
        case actionTypes.SET_CATEGORIES:
            return { ...state, categories: payload }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                ecommerceCart: [
                    ...(state.ecommerceCart || []),  // Retain previous items in ecommerceCart array
                    payload                          // Append new payload to ecommerceCart
                ]
            };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload };
        case actionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
}

// export const addSelectedProductToCart = (state = initialCartState, { type, payload }) => {
//     switch (type) {
//         case actionTypes.ADD_TO_CART:
//             return {
//                 ...state,
//                 cartItems: [
//                     ...(state.cartItems || []),  // Retain previous items in ecommerceCart array
//                     payload                          // Append new payload to ecommerceCart
//                 ]
//             };
//         case actionTypes.REMOVE_SELECTED_PRODUCTS:
//             return {};
//         default:
//             return state;
//     }
// }
