import { Button, Center, Image, Stack, Text, View, HStack, Checkbox } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { left } from 'styled-system';
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Nivel22Styles from './nivel22.style';


const Nivel22: FC<IGeneralProps> = (props) => {
    const redirect = (): void => {
        navigation.navigate('Home');
    }

    const redirectLogin = (): void => {
        navigation.navigate('Login');
    }

    const { navigation } = props;

    // Controller
    const { useScreenHooks } = useControllers();
    const { useQuestions } = useScreenHooks();
    const { time, showAlert, showAlertError, showAlertTimeout, handleResponse } = useQuestions(true);

    // Components
    const { Alert, Navigation, Pista } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/fondo221.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Nivel22Styles.view}>
                <Stack style={Nivel22Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View style={Nivel22Styles.image2}>
                            <Stack>
                                <HStack display="flex" justifyContent="space-between">
                                    <View>
                                        <Image
                                            source={require('../../assets/images/cuadro2.png')}
                                            alt="Welcome's Image"
                                        />
                                    </View>
                                    <View style={{ marginTop: "4%", position: "relative", marginRight: "30%" }}>
                                        <Image
                                            source={require('../../assets/images/reloj.png')}
                                            alt="Welcome's Image"
                                        />
                                        <Text style={{ position: "absolute", right: "10%", fontSize: 20, color: "white", top: "25%" }}>
                                            {time}
                                        </Text>
                                    </View>
                                </HStack>
                            </Stack>
                            <Image
                                source={require('../../assets/images/dolores2.png')}
                                alt="Welcome's Image"
                                style={{ marginLeft: "30%", marginTop: "5%" }}
                            />
                        </View>
                        <Stack style={Nivel22Styles.image}>
                            <HStack display="flex" justifyContent="space-between" alignItems="center">
                                <View style={{ paddingTop: "5%",  marginLeft: "-7%" }}>
                                    <Image
                                        source={require('../../assets/images/barra2.png')}
                                        alt="Welcome's Image"
                                    />
                                </View>
                                <HStack>
                                    <Pista question='question2' />
                                </HStack>
                            </HStack>
                            <View style={{ paddingTop: "4%" }}>
                                <Image
                                    source={require('../../assets/images/hola1.png')}
                                    alt="Welcome's Image"
                                />
                            </View>
                            <View style={{ paddingTop: "3%" }}>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "5%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Cápsulas de Uvamín™ retard 100 mg
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Berifén™ 100 mg, cápsulas de liberación prolongada
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "2%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                {`Berifén™ 50 mg, comprimidos gastrorresistentes \n recubiertos con película`}
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>      
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('correct')}>
                                            <Text style={{ marginLeft: "5.5%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Berifén™ Parche transdérmico
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                            </View>
                        </Stack>
                    </HStack>
                </Stack>
                <Alert view={() => navigation.navigate("Nivel23")} type="timeout" level='level2' question='question2' show={showAlertTimeout} />
                <Alert view={() => navigation.navigate("Nivel23")} type="error" level='level2' question='question2' show={showAlertError} />
                <Alert view={() => navigation.navigate("Nivel23")} type="success" level='level2' question='question2' show={showAlert} />
            </View>
            <Navigation/>
        </React.Fragment>
    );
}

export default Nivel22;     