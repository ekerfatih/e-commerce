import {SET_CART, SET_PAYMENT, SET_ADDRESS} from "../actions/shoppingCartActions.js";

const initialState = {
    cart: [], payment: {}, address: {}
}

export const ShoppingCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CART: {
            const existingIndex = state.cart.findIndex(item => item.product.id === action.payload.id);
            if (existingIndex !== -1) {
                const updatedCart = state.cart.map((item, index) =>
                    index === existingIndex
                        ? {...item, count: item.count + 1}
                        : {item}
                );
                return {...state, cart: updatedCart};
            }

            return {
                ...state,
                cart: [...state.cart, {count: 1, checked: true, product: action.payload}]
            };
        }

        case SET_PAYMENT:
            return {...state, payment: action.payload};
        case SET_ADDRESS:
            return {...state, address: action.payload};
        default:
            return state;
    }


}