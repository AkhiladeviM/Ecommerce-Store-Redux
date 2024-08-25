import { actionTypes } from "../constants/actionTypes";
const initialState = {
    products: [{
        id: 1,
        title: "Akhila",
        category: "Front-end developer"
    }]
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCTS:
            return state;
        default:
            return state;
    }
}