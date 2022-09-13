import { Dispatch } from "redux";
import { IActionLogin, IActionLogout } from "../../../models/interfaces/login";
import useServices from "../../services";
import { LOGIN } from '../../../types';

const useLoginActions = () => {
    // Services
    const { useLoginServices } = useServices();
    const { loginServices } = useLoginServices();

    // Actions 
    const actLogin = (request: IActionLogin) => async (dispatch: Dispatch) => {
        const { fullname, onError, onSuccess } = request;
        try {
            const res = await loginServices(fullname);
            const { data, message } = res.data;
console.log(res.data)
            if (message.code === 500) {
                onError && onError("unauthenticated");
            } else {
                data.fullname = fullname

                dispatch({
                    type: "SET_LEVELS",
                    payload: data.levels
                });

                dispatch({
                    type: LOGIN,
                    payload: data
                });

                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    const actLogout = (request: IActionLogout) => async (dispatch: Dispatch) => {
        const { onError, onSuccess, fullname } = request;
        try {
            console.log(fullname)
            dispatch({
                type: LOGIN,
                payload: {
                    fullname: fullname,
                    token: "",
                    user: {},
                    levels: {
                        level2: false,
                        level3: false
                    }

                }
            });

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError();
        }
    }

    const actLevel1 = async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: "SET_LEVEL1",
                payload: {
                    level1: true
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const actLevel2 = async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: "SET_LEVEL2",
                payload: {
                    level2: true
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const actLevel3 = async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: "SET_LEVEL3",
                payload: true
            })
        } catch (error) {
            console.log(error);
        }
    }

    return {
        actLogin,
        actLogout,
        actLevel1,
        actLevel2,
        actLevel3
    }
};

export default useLoginActions;