import axios from "axios";
import { IRegister } from '../../../models/interfaces/register';

const useRegisterProviders = () => {
    const registerUser = (data: IRegister) : Promise<any> => {
        return axios({
            method: 'POST',
            url: '/auth/register',
            data
        })
    }

    return {
        registerUser,
    }
};

export default useRegisterProviders;