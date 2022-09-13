import { Dispatch } from "redux";
import { ICallback, ISetLevel } from "../../../models/interfaces/general";
import useServices from "../../services";

const useGeneralAction = () => {
    const { useGeneralServices } = useServices();
    const { getLevelsService, setLevelsService } = useGeneralServices();
    
    const actGetLevels = (request: ICallback) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;

        try {
            const res = await getLevelsService();
            const { data } = res.data;

            dispatch({
                type: "SET_LEVELS",
                payload: data
            })
            onSuccess && onSuccess(data)
        } catch (error) {
            onError && onError(error)
        }
    }

    //Accion para ejecutar la promesa 
    const actSetLevels = (request: ISetLevel) => async(dispatch: Dispatch) => {
        const { onError, onSuccess, levelId } = request;

        try {
            const res = await setLevelsService(levelId);
            const { transaction } = res.data;

            if(transaction.status === true){
                onSuccess && onSuccess()
            }else{
                onError && onError();
            }
        } catch (error) {
            onError && onError(error)
        }
    }

    return {
        actGetLevels,
        actSetLevels
    };
};

export default useGeneralAction;
