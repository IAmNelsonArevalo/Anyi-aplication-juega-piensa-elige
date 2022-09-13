import { useForm } from "react-hook-form";
import { IRegister } from '../../../models/interfaces/register';
import { IActionRegisterUser } from '../../../models/interfaces/register/index';
import useApi from '../../../api';
import { Alert } from "react-native";
import { useToast } from "native-base";
import { useState } from "react";

const useRegister = (navigation: any) => {
    // useForm
    const { control, handleSubmit, formState: { isValid }, reset } = useForm({
        mode: "onChange"
    });

    // Actions
    const { useActions } = useApi();
    const { dispatch, useRegisterActions } = useActions();
    const { actRegisterUser } = useRegisterActions();

    // State
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [titleAlert, setTitleAlert] = useState<string>("");
    const [subtitleAlert, setSubtitleAlert] = useState<string>("");

    // Handlers
    const handleRegister = (data: IRegister) => {
        const request : IActionRegisterUser = {
            data: {...data, phone: "12345679898"},
            onSuccess: (data: any) => {
                console.log(data)
                reset({
                    fullname: "",
                    email: "",
                    phone: "",
                    pharmacy: ""
                });

                setShowAlert(true);
                setTitleAlert("Se creo tu cuenta exitosamente.")
                setSubtitleAlert("Ya que tu cuenta fue creada ahora podras ingresar a nuestra aplicación");
                setIsError(false);
            },  
            onError: (data: any) => {
                setShowAlert(true);
                setTitleAlert(data)
                setSubtitleAlert("Lastimosamente no pudimos crear tu cuenta, podras crear una nueva cuenta otra vez!");
                setIsError(true);
            }
        }

        dispatch(actRegisterUser(request));
    }

    return {
        control,
        handleSubmit,
        handleRegister,
        isValid,
        showAlert,
        setShowAlert,
        titleAlert,
        subtitleAlert,
        isError
    };
};

export default useRegister;