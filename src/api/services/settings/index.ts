import { IEditUser } from '../../../models/interfaces/settings';
import useProviders from '../../providers';
import { trackPromise } from 'react-promise-tracker';

const useSettingsServices = () => {
    const { useSettingsProviders } = useProviders();
    const { editUser } = useSettingsProviders();

    const editUserService = (data: IEditUser) : Promise<any> => {
        return new Promise(async(resolve, reject) => {
            try {
                resolve(await trackPromise(editUser(data)));
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        editUserService,
    }
}

export default useSettingsServices;