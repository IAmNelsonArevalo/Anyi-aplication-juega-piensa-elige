import axios from 'axios';
import { useSelector } from 'react-redux';
import { IEditUser } from '../../../models/interfaces/settings';
import useSelectors from '../../../models/selectors';

const useSettingsProviders = () => {
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const login = useSelector(loginSelector);

    const editUser = (data: IEditUser) => {
        return axios({
            method: "POST",
            url: "/auth/edit-user",
            data: data,
            headers: {
                "Authentication": `Bearer ${login.token}`
            }
        })
    }

    return {
        editUser,
    }
}

export default useSettingsProviders;