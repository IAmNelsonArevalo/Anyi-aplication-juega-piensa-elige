import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import useModels from "../models";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

const useStore = () => {
    const { useReducers } = useModels();

    const initialState = {};
    let middleware = [thunk];
    const reducers = useReducers();
    const persistConfig = {
        key: "root",
        storage: AsyncStorage,
    }

    const persistReduce = persistReducer(persistConfig, reducers);

    const composerReducer =  compose();

    const store = createStore(
        persistReduce,
        initialState,
        composerReducer(applyMiddleware(...middleware))
    );

    // @ts-ignore
    const persistor = persistStore(store);

    return {
        store,
        persistor
    }
}

export default useStore;