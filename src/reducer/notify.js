import { BUY_ITEM, LIST_PRODUCT } from "../constants/actionTypes";
import { MSG_BUY_SUCCESS, MSG_INTRO } from "../constants/messages";

const initialState = MSG_INTRO;

export const notify = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PRODUCT:
            return state;
        case BUY_ITEM:
            state = MSG_BUY_SUCCESS
            return state;
        default:
            return state;
    }
};

export default notify;