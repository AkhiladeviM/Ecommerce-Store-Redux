import { actionTypes } from "../constants/actionTypes";
const initialState = {
    products: [],
    categories: [],
    ecommerceCart: [],
    tab:"All"
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
            const existingItem = state.ecommerceCart.find(item => item.id === payload.id);

            if (existingItem) {
                // If the item exists, update its quantity
                return {
                    ...state,
                    ecommerceCart: state.ecommerceCart.map(item =>
                        item.id === payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                // If the item doesn't exist, add it to the cart
                return {
                    ...state,
                    ecommerceCart: [
                        ...state.ecommerceCart,
                        { ...payload, quantity: 1 } // Add the item with an initial quantity of 1
                    ]
                };
            }

        case actionTypes.UPDATE_CART_ITEMS:
            return { ...state, ecommerceCart: [...payload] };
        case actionTypes.SET_TAB:
            return { ...state, tab: payload };
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