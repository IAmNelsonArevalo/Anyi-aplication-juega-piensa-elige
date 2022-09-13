import useRegisterServices from './register';
import useLoginServices from './login';
import useSettingsServices from './settings';
import useGeneralServices from './general';

const useServices = () => {
    return {
        useRegisterServices,
        useLoginServices,
        useSettingsServices,
        useGeneralServices
    };
};

export default useServices;