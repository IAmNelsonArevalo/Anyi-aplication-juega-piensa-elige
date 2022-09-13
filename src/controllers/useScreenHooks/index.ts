import useRegister from './register';
import useLogin from './login';
import useWelcome from './welcome';
import useSettings from './settings';
import useQuestions from './questions';

const useScreenHooks = () => {
    return {
        useRegister,
        useLogin,
        useWelcome,
        useSettings,
        useQuestions
    };
};

export default useScreenHooks;