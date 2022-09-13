import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import useSelectors from '../../../models/selectors';
import { LOGIN } from '../../../types';
import useServices from '../../services';

const useSettingsActions = () => {
    // Services
    const { useSettingsServices } = useServices();
    const { editUserService } = useSettingsServices();

    // Selectors
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const login = useSelector(loginSelector);

    const actEditUser = (request: any) => async(dispatch: Dispatch) => {
        const { req, onError, onSuccess } = request;

        try {
            const res = await editUserService(req);
            const { data } = res.data;

            dispatch({
                type: LOGIN,
                payload: {
                    ...login,
                    user: data
                }
            });

            onSuccess && onSuccess()
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actEditUser,
    }
}

export default useSettingsActions;