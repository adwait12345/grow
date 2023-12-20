import { ActionTypes } from "../Actions-Types/actions-type";



const initialState = {
    Cart: [],
    Orders: [],
    Method: "",
    Transaction: false

};

export const CartReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ActionTypes.SET_CART:
            return { ...state, Cart: action.payload };

        default:
            return state;
    }

};

export const selectedCartReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_CART:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export const OrderReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ActionTypes.SET_ORDER:
            return { ...state, Orders: action.payload };

        default:
            return state;
    }

};

export const selectedOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_CART:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export const MethodReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ActionTypes.SET_METHOD:
            return { ...state, Method: action.payload };

        default:
            return state;
    }

};

export const selectedMethodReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_METHOD:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export const TxReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ActionTypes.SET_TRANSACTION:
            return { ...state, Transaction: action.payload };

        default:
            return state;
    }

};

export const selectedTxReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_TRANSACTION:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};