import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


import propertyReducer from "./property-card/property-card.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
   property: propertyReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;