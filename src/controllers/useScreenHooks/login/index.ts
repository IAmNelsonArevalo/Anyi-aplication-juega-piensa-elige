import useApi from '../../../api';
import { useForm } from 'react-hook-form';
import { IActionLogin } from '../../../models/interfaces/login';
import useModels from '../../../models';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { IUseNavigation } from '../../../models/interfaces/general';

const useLogin = () => {
    /** Navigation */
    const navigation = useNavigation<IUseNavigation>();

    //useform
    const { control, handleSubmit, reset } = useForm({
        mode: "onChange"
    });

    // Actions 
    const { useActions } = useApi();
    const { dispatch, useLoginActions } = useActions();
    const { actLogin } = useLoginActions();

    const { useSelectors } = useModels();
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const { fullname } = useSelector(loginSelector);

    /** States */
    const [showAlert, setShowAlert] = useState<boolean>(false);

    //handlers
    const handleLogin = (data: any) => {
        const request: IActionLogin = {
            fullname: data.fullname,
            onError: (error: any) => {
                if(error === "unauthenticated"){
                    setShowAlert(true);
                }
            },
            onSuccess: () => {
                navigation.navigate('Welcome')
            }
        };

        dispatch(actLogin(request));
    }

    useEffect(() => {
        reset({
            fullname: fullname
        })
    }, [reset])

    return {
        control,
        handleSubmit,
        handleLogin,
        navigation,
        setShowAlert,
        showAlert
    }
}

export default useLogin;