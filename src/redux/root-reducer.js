import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


import commentsReducer from "./comments/comments.reducer";
import propertyReducer from "./property-card/property-card.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}


const rootReducer = combineReducers({
   property: propertyReducer,
   comments: commentsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;