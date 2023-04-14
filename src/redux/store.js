import { configureStore} from "@reduxjs/toolkit";

import { persistStore, FLUSH, REGISTER, REHYDRATE, PAUSE,PURGE, PERSIST } from "redux-persist"



import persistedReducer from "./root-reducer";


const store = configureStore({
    reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

let persistor = persistStore(store)

export { store, persistor };