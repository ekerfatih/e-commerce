import {SET_CART, SET_PAYMENT, SET_ADDRESS} from "../actions/shoppingCartActions.js";

const initialState = {
    cart: [], payment: {}, address: {}
}

export const ShoppingCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CART: {
            const { product, checked, count } = action.payload
            const idx = state.cart.findIndex(i => i.product.id === product.id)

            if (idx !== -1) {
                const updated = state.cart.map((item, index) => {
                    if (index !== idx) return item
                    const delta = Number(count) || 0
                    const nextCount = item.count + delta
                    const nextChecked = typeof checked === 'boolean' ? checked : item.checked
                    return { ...item, count: nextCount, checked: nextChecked }
                }).filter(i => i.count > 0)
                return { ...state, cart: updated }
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        product,
                        checked: typeof checked === 'boolean' ? checked : true,
                        count: Math.max(1, Number(count) || 1)
                    }
                ]
            }
        }

        case SET_PAYMENT:
            return {...state, payment: action.payload};
        case SET_ADDRESS:
            return {...state, address: action.payload};
        default:
            return state;
    }


}