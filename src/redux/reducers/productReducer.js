import { actionTypes } from "../constants/actionTypes";
const initialState = {
    products: [],
    categories: []
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case actionTypes.REMOVE_PRODUCTS:
            return { ...state, products: [] }
        case actionTypes.SET_CATEGORIES:
            return { ...state, categories: payload }
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
