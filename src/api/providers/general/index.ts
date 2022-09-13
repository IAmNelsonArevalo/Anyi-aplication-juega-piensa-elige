import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import useSelectors from "../../../models/selectors";

const useGeneralProviders = () => {
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const { token } = useSelector(loginSelector); 
    
    const getLevels = () : Promise<AxiosResponse> => axios.get('/levels/get-levels', {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })  

    //guardar nivel
    const setLevels = (levelId: number) : Promise<AxiosResponse> => axios.post('/levels/set-levels', { level_id: levelId }, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })  

    return {
        getLevels,
        setLevels
    };
};

export default useGeneralProviders;
