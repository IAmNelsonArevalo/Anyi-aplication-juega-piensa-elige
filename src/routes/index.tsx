import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import _ from "lodash";
import React from "react";
import useViews from "../views";
import useControllers from '../controllers';
import useModels from "../models";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Routes = () => {
    const {
        Home,
        Register,
        Login,
        Politica,
        Welcome,
        Settings,
        Instructions2,
        Instructions3,
        Instructions,
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
        FelicidadesN3,
        Instrucciones1,
        Instrucciones2,
        Conteo1,
        Vamos1,
        Level3,
        Prueba1,
        Prueba2,
        Prueba3,
        Prueba4,
        Conteo2,
        Vamos2

        
    } = useViews();

    const { useSelectors } = useModels();
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const { token } = useSelector(loginSelector);

    const routes = [
        {
            name: "Home",
            component: Home
        },
        {
            name: "Register",
            component: Register
        },
        {
            name: "Login",
            component: Login
        },
        {
            name: "Politica",
            component: Politica
        },
        {
            name: "Welcome",
            component: Welcome
        },
        {
            name: "Settings",
            component: Settings
        },
        {
            name: "Instructions",
            component: Instructions
        },
        {
            name: "Instructions2",
            component: Instructions2
        },
        {
            name: "Instructions3",
            component: Instructions3
        },
        {
            name: "Level1",
            component: Level1
        },
        {
            name: "ProveedorN1",
            component: ProveedorN1
        },
        {
            name: "ProveedorN2",
            component: ProveedorN2
        },
        {
            name: "ProveedorN3",
            component: ProveedorN3
        },
        {
            name: "ProveedorN4",
            component: ProveedorN4
        },
        {
            name: "FelicidadesN1",
            component: FelicidadesN1
        },
        {
            name: "Level2",
            component: Level2
        },
        {
            name: "Instruciones2",
            component: Instruciones2
        },
        {
            name: "Instruciones3",
            component: Instruciones3
        },
        {
            name: "Instruciones4",
            component: Instruciones4
        },
        {
            name: "Conteo",
            component: Conteo
        },
        {
            name: "Conteo2",
            component: Conteo2
        },
        {
            name: "Vamos",
            component: Vamos
        },
        {
            name: "Vamos2",
            component: Vamos2
        },
        {
            name: "Nivel2",
            component: Nivel2
        },
        {
            name: "Nivel22",
            component: Nivel22
        },
        {
            name: "Nivel23",
            component: Nivel23
        },
        {
            name: "Nivel24",
            component: Nivel24
        },
        {
            name: "FelicidadesN2",
            component: FelicidadesN2
        },
        {
            name: "Instrucciones1",
            component: Instrucciones1
        },
        {
            name: "Instrucciones2",
            component: Instrucciones2
        },
        {
            name: "Conteo1",
            component: Conteo1
        },
        {
            name: "Vamos1",
            component: Vamos1
        },
        {
            name: "Level3",
            component: Level3
        },
        {
            name: "Prueba1",
            component: Prueba1
        },
        {
            name: "Prueba2",
            component: Prueba2
        },
        {
            name: "Prueba3",
            component: Prueba3
        },
        {
            name: "Prueba4",
            component: Prueba4
        },
        {
            name: "FelicidadesN3",
            component: FelicidadesN3
        },
    ]

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={token !== "" ? "Welcome" : "Home"}>
                {
                    _.map(routes, (item: any, index: number) => {
                        return (
                            <Stack.Screen
                                key={index}
                                name={item.name}
                                component={item.component}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;