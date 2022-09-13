import { Button, Center, Image, Stack, Text, View, HStack, Checkbox } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { left } from 'styled-system';
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Nivel23Styles from './nivel23.style';


const Nivel23: FC<IGeneralProps> = (props) => {
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
                source={require('../../assets/images/fondo23.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Nivel23Styles.view}>
                <Stack style={Nivel23Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View style={Nivel23Styles.image2}>
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
                                source={require('../../assets/images/docotra.png')}
                                alt="Welcome's Image"
                                style={{ marginLeft: "30%", marginTop: "5%" }}
                            />
                        </View>
                        <Stack style={Nivel23Styles.image}>
                            <HStack display="flex" justifyContent="space-between" alignItems="center">
                                <View style={{ paddingTop: "5%", marginLeft: "-7%" }}>
                                    <Image
                                        source={require('../../assets/images/barra3.png')}
                                        alt="Welcome's Image"
                                    />
                                </View>
                                <HStack>
                                    <Pista question='question3' />
                                </HStack>
                            </HStack>
                            <View style={{ paddingTop: "4%" }}>
                                <Image
                                    source={require('../../assets/images/hola2.png')}
                                    alt="Welcome's Image"
                                />
                            </View>
                            <View style={{ paddingTop: "3%" }}>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Cápsulas de Uvamín™ retard 100 mg
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('correct')}>
                                            <Text style={{ marginLeft: "5.5%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Decatileno™ en tabletas
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3.5%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Berifén™ 100 mg, cápsulas de liberación prolongada
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "2.5%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                {`Berifén™ 50 mg, comprimidos gastrorresistentes \n recubiertos con película`}
                                            </Text>
                                        </Checkbox>  
                                    </HStack>
                                </Stack>
                            </View>
                        </Stack>
                    </HStack>
                </Stack>
                <Alert view={() => navigation.navigate("Nivel24")} type="timeout" level='level2' question='question3' show={showAlertTimeout} />
                <Alert view={() => navigation.navigate("Nivel24")} type="error" level='level2' question='question3' show={showAlertError} />
                <Alert view={() => navigation.navigate("Nivel24")} type="success" level='level2' question='question3' show={showAlert} />
            </View>
            <Navigation/>
        </React.Fragment>
    );
}

export default Nivel23;         