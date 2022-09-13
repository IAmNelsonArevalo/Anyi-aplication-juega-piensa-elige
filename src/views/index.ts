import { lazy } from "react";
import ProveedorN1 from './proveevorN1/index';

const Home = lazy(() => import('./Home'));
const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./Login'));
const Politica = lazy(() => import('./Politica')); 
const Welcome = lazy(() => import('./Welcome')); 
const Settings = lazy(() => import('./settings')); 
const Instructions = lazy(() => import('./Instructions')); 
const Instructions2 = lazy(() => import('./Instructions2')); 
const Instructions3 = lazy(() => import('./Instructions3')); 
const Level1 = lazy(() => import('./Level1')); 
const ProveedorN2 = lazy(() => import('./proveedorN2')); 
const ProveedorN3 = lazy(() => import('./proveedorN3')); 
const ProveedorN4 = lazy(() => import('./proveedorN4')); 
const FelicidadesN1 = lazy(() => import('./felicidadesN1')); 
const Level2 = lazy(() => import('./level2')); 
const Instruciones2 = lazy(() => import('./instruciones2')); 
const Instruciones3 = lazy(() => import('./instruciones3')); 
const Instruciones4 = lazy(() => import('./Instruciones4'));
const Conteo = lazy(() => import('./conteo'));
const Vamos = lazy(() => import('./vamos'));
const Nivel2 = lazy(() => import('./nivel2'));
const Nivel22 = lazy(() => import('./nivel22'));
const Nivel23 = lazy(() => import('./nivel23'));
const Nivel24 = lazy(() => import('./nivel24'));
const FelicidadesN2 = lazy(() => import('./felicidadesN2'));
const Instrucciones1 = lazy(() => import('./instrucciones1'));
const Instrucciones2 = lazy(() => import('./instrucciones2'));
const Conteo1 = lazy(() => import('./conteo1'));
const Vamos1 = lazy(() => import('./vamos1'));
const Level3 = lazy(() => import('./level3'));
const Prueba1 = lazy(() => import('./prueba1'));
const Prueba2 = lazy(() => import('./prueba2'));
const Prueba3 = lazy(() => import('./prueba3'));
const Prueba4 = lazy(() => import('./prueba4'));
const FelicidadesN3 = lazy(() => import('./felicidadesN3'));
const Conteo2 = lazy(() => import('./conteo2'));
const Vamos2 = lazy(() => import('./vamos2'));




const useViews = () => {
    return {
        Home,
        Register,
        Login,
        Politica,
        Welcome,
        Settings,
        Instructions,
        Instructions2,
        Instructions3,
        Level1,
        ProveedorN1,
        ProveedorN2,
        ProveedorN3,
        ProveedorN4,
        FelicidadesN1,
        Level2,
        Instruciones2,
        Instruciones3,
        Instruciones4,
        Conteo,
        Vamos,
        Nivel2,
        Nivel22,
        Nivel23,
        Nivel24,
        FelicidadesN2,
        Instrucciones1,
        Instrucciones2,
        Conteo1,
        Vamos1,
        Level3,
        Prueba1,
        Prueba2,
        Prueba3,
        Prueba4,
        FelicidadesN3,
        Conteo2,
        Vamos2
    };
};

export default useViews;