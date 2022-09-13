import useRegisterProviders from './register';
import useLoginProviders from './login';
import axios from 'axios';
import useSettingsProviders from './settings';
import useGeneralProviders from './general';

const useProviders = () => {
    axios.defaults.baseURL = "https://api-game-uvamin.emlproyectos.com.co/api";
    
    return {
        useRegisterProviders,
        useLoginProviders,
        useSettingsProviders,
        useGeneralProviders
    };
};

export default useProviders;