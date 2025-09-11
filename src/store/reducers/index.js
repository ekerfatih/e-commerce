import {combineReducers} from 'redux'
import {ClientReducer} from "./clientReducer.js";
import {ShoppingCartReducer} from "./ShoppingCartReducer.js";
import {ProductReducer} from "./ProductReducer.js";


export const reducer = combineReducers({
    client: ClientReducer, cart: ShoppingCartReducer, products: ProductReducer
})