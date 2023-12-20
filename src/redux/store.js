import { createStore, applyMiddleware } from "redux";

import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import reducer from "./reducers/index";

const persistConfig = {
    key: "main-root",
    storage
}
let devToolsExtension;

if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}
const persistedReducer = persistReducer(persistConfig, reducer);


const store = createStore(persistedReducer, {}, devToolsExtension);

const Persistor = persistStore(store)
export { Persistor }
export default store;