import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useApi from "../../../api";
// @ts-ignore
import { IActionEditUser } from '../../../models/interfaces/settings';
import useSelectors from "../../../models/selectors";

const useSettings = () => {
    // Actions
    const { useActions } = useApi();
    const { dispatch, useSettingsActions } = useActions();
    const { actEditUser } = useSettingsActions();

    // Selectors
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const login = useSelector(loginSelector);

    // State
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [titleAlert, setTitleAlert] = useState<string>("");
    const [subtitleAlert, setSubtitleAlert] = useState<string>("");

    // Use Form
    const {
        control,
        handleSubmit,
        formState: { isValid },
        reset
    } = useForm({
        mode: "onChange"
    });

    const handleChanges = (data: any) => {
        const request: IActionEditUser = {
            req: {
                ...data,
                id: login.user.id,
                phone: "123456789"
            },
            onSuccess: () => {
                setShowAlert(true);
                setTitleAlert("Se editaron tus datos existosamente")
                setSubtitleAlert("Gracias por actualizar tus datos!, asi podremos tener todos tus datos actializados.");
            },
            onError: () => {
                setShowAlert(true);
                setTitleAlert(data)
                setSubtitleAlert("Lastimosamente no pudimos editar tu cuenta, podras intertalo mas tarde!");
                setIsError(true);
            }
        }

        dispatch(actEditUser(request));
    }

    useEffect(() => {
        reset({
            fullname: login.user.fullname,
            pharmacy: login.user.pharmacy.name,
            email: login.user.email,
            phone: login.user.phone
        });
    }, [login])

    return {
        control,
        handleSubmit,
        handleChanges,
        isValid,
        showAlert,
        isError,
        titleAlert,
        subtitleAlert
    };
}

export default useSettings;