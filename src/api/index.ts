import useActions from './actions';
import useProviders from './providers';
import useServices from './services';

const useApi = () => {
    return {
        useProviders,
        useServices,
        useActions
    };
};

export default useApi;