import { Dispatch } from "redux";
import { IActionRegisterUser } from '../../../models/interfaces/register';
import useServices from '../../services/index';
import {Alert} from "react-native";

const useRegisterActions = () => {
    // Services
    const { useRegisterServices } = useServices();
    const { registerUserService } = useRegisterServices();

    const actRegisterUser = (request: IActionRegisterUser) => async(dispatch: Dispatch) => {
        const { data, onError, onSuccess } = request;
        try {
            const res = await registerUserService(data)
            if(res.data.transaction.status === true){

                dispatch({
                    type: "LOGIN",
                    payload: {
                        token: '',
                        user: {}, 
                        fullname: data.fullname
                    }
                });
                
                onSuccess && onSuccess(res.data);
            }else{
                onError && onError(res.data.message.content);
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actRegisterUser,
    };
};

export default useRegisterActions;