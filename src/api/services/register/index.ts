import { trackPromise } from 'react-promise-tracker';
import { IRegister } from '../../../models/interfaces/register';
import useProviders from '../../providers/index';
const useRegisterServices = () => {
    // Providers
    const { useRegisterProviders } = useProviders();
    const { registerUser } = useRegisterProviders();

    // Services
    const registerUserService = (data: IRegister) : Promise<any> => new Promise(async(resolve, reject) => {
        console.log(data)
        try {
            resolve(await trackPromise(registerUser(data)));
        } catch (error) {
            reject(error);
        }
    })

    return {
        registerUserService,
    };
}

export default useRegisterServices;