import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';
const useLoginServices = () => {
    const { useLoginProviders } = useProviders();
    const { login } = useLoginProviders();

    // Services
    const loginServices = (fullname: string) : Promise<any> => {
        return new Promise(async(resolve, reject) => {
            try {
                resolve(await trackPromise(login(fullname)));
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        loginServices,
    }
}

export default useLoginServices;