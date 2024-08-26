import { BUY_ITEM } from "../constants/actionTypes";
import LOCAL_STORAGE_NAME from "../constants/localStorage";

let initialState = [];

const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
initialState = (shoppingCartLocal != null && shoppingCartLocal.length > 0)?shoppingCartLocal:initialState;

const getIndexByProduct = (listItem, product) =>{
    for(let i = 0; i < listItem.length;i++){
        if(listItem[i].product.id === product.id){
            return i;
    }
}
    return -1
}
const cart = (state = initialState, action) => {
    let {product, quantity} = action;
    let item = {product, quantity};

    switch (action.type) {
    case BUY_ITEM:
        if(state.length === 0){
            state.push(item);
        }
        else{
            index = getIndexByProduct(state,product)
            if(index >= 0){
                state[index].quantity += quantity // số lượng mua mà action mang lại cộng với số lượng mua có sẵn
            }
            else{
                state.push(item);
            }
        }
        localStorage.setItem("",)
        return[...state];

    default:
        return state;
    }
}