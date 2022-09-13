import { useDispatch } from "react-redux";
import useRegisterActions from './register';
import useLoginActions from './login';
import useSettingsActions from './settings';
import useGeneralAction from "./general";

const useActions = () => {
    const dispatch = useDispatch();

    return {
        dispatch,
        useRegisterActions,
        useLoginActions,
        useSettingsActions,
        useGeneralAction
    };
};

export default useActions;