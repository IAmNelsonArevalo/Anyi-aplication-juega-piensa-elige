import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface ICallback {
    onSuccess: (data?: any) => void;
    onError: (data?: any) => void;
}

export interface IGeneralProps {
    navigation: any;
}

type IScreens = {
    Home: undefined;
    Register: undefined;
    Login: undefined;
    Politica: undefined;
    Welcome: undefined;
    Settings: undefined;
    Instructions: undefined;
    Instructions2: undefined;
    Instructions3: undefined;
    Level1: undefined;
    ProveedorN1: undefined;
    ProveedorN2: undefined;
    ProveedorN3: undefined;
    ProveedorN4: undefined;
    FelicidadesN1: undefined;
    Level2: undefined;
    Instruciones2: undefined;
    Instruciones3: undefined;
    Instruciones4: undefined;
    Conteo: undefined;
    Conteo2: undefined;
    Vamos: undefined;
    Vamos2: undefined;
    Nivel2: undefined;
    Nivel22: undefined;
    Nivel23: undefined;
    Nivel24: undefined;
    FelicidadesN2: undefined;
    Instrucciones1: undefined;
    Instrucciones2: undefined;
    Conteo1: undefined;
    Vamos1: undefined;
    Level3: undefined;
    Prueba1: undefined;
    Prueba2: undefined;
    Prueba3: undefined;
    Prueba4: undefined;
    FelicidadesN3: undefined;
}

export type IUseNavigation = NativeStackNavigationProp<IScreens, "Home">

export interface ISetLevel extends ICallback{
    levelId: number
}