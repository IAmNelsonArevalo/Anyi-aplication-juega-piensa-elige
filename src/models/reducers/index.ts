import { combineReducers } from "@reduxjs/toolkit";
import useTestReducers from "./test";
import useLoginReducers from './login';

const useReducers = () => {
    //Reducers
    const { test } = useTestReducers();
    const { login, level1, levels } = useLoginReducers();

    return combineReducers(
        Object.assign({
            test,
            login,
            level1,
            levels
        })
    );
};

export default useReducers;