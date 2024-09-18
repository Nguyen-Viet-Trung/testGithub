import {combineReducers} from 'redux';
import listProduct from './listProduct';
import cart from './cart';
import notify from './notify';
const reducer = combineReducers({
    cart: cart,
    listProduct: listProduct,
    notify:notify
})

export default reducer;