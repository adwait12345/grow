import { combineReducers } from "redux";
import {
    CartReducer,
    selectedCartReducer,
    selectedOrderReducer,
    OrderReducer,
    MethodReducer,
    selectedMethodReducer,
    TxReducer,
    selectedTxReducer

} from "./Reducer";

const reducer = combineReducers({
    allCarts: CartReducer,
    Cart: selectedCartReducer,
    allOrders: OrderReducer,
    Order: selectedOrderReducer,
    allMethod: MethodReducer,
    Method: selectedMethodReducer,
    allTrx: TxReducer,
    Transaction: selectedTxReducer

});
export default reducer;