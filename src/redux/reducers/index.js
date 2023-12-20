import { combineReducers } from "redux";
import {
    CartReducer,
    selectedCartReducer,
    selectedOrderReducer,
    OrderReducer,
    MethodReducer,
    selectedMethodReducer

} from "./Reducer";

const reducer = combineReducers({
    allCarts: CartReducer,
    Cart: selectedCartReducer,
    allOrders: OrderReducer,
   Order: selectedOrderReducer,
   allMethod: MethodReducer,
   Method:selectedMethodReducer

});
export default reducer;