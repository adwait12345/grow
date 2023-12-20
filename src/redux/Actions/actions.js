import { ActionTypes } from "../Actions-Types/actions-type";

export const setAddCart = (Cart) => {
    return {
        type: ActionTypes.SET_CART,
        payload: Cart,
    };
};

export const selectedCart= (sCart) => {
    return {
        type: ActionTypes.SELECTED_CART,
        payload: sCart,
    };
};

export const setOrder = (order) => {
    return {
        type: ActionTypes.SET_ORDER,
        payload: order,
    };
};

export const selectedOrder = (sOrder) => {
    return {
        type: ActionTypes.SELECTED_ORDER,
        payload: sOrder,
    };
};

export const setMethod = (method) => {
    return {
        type: ActionTypes.SET_METHOD,
        payload:method,
    };
};

export const selectedMethod = (smethod) => {
    return {
        type: ActionTypes.SELECTED_METHOD,
        payload: smethod,
    };
};


export const setTransaction = (tx) => {
    return {
        type: ActionTypes.SET_TRANSACTION,
        payload: tx,
    };
};

export const selectedTransaction = (stx) => {
    return {
        type: ActionTypes.SELECTED_TRANSACTION,
        payload:tx,
    };
};