import { Button, Center, Image, Stack, Text, View, HStack, Checkbox } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { left } from 'styled-system';
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Nivel2Styles from './nivel2.style';


const Nivel2: FC<IGeneralProps> = (props) => {
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
                source={require('../../assets/images/fondo22.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Nivel2Styles.view}>
                <Stack style={Nivel2Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View style={Nivel2Styles.image2}>
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
                                source={require('../../assets/images/dolores.png')}
                                alt="Welcome's Image" 
                                style={{ marginLeft: "30%", marginTop: "5%" }}
                            />
                        </View>
                        <Stack style={Nivel2Styles.image}>
                            <HStack display="flex" justifyContent="space-between" alignItems="center">
                                <View style={{ paddingTop: "5%", marginLeft: "-8%" }}>
                                    <Image
                                        source={require('../../assets/images/barraProgreso.png')}
                                        alt="Welcome's Image"
                                    />
                                </View>
                                <HStack>
                                    <Pista question='question1'/>
                                </HStack>
                            </HStack>
                            <View style={{ paddingTop: "1%" }}>
                                <Image 
                                    source={require('../../assets/images/hola.png')}
                                    alt="Welcome's Image"
                                />
                            </View>
                            <View style={{ paddingTop: "2%" }}>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('correct')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Cápsulas de Uvamín™ retard 100 mg
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "2%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Berifén™ 100 mg, cápsulas de liberación prolongada
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "2.5%" }}>   
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Uvamín™ 10 mg, comprimidos de liberación prolongada
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "2%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Cápsulas de Berifén™ 10 mg
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                            </View>
                        </Stack>
                    </HStack>
                </Stack>
                <Alert view={() => navigation.navigate("Nivel22")} type="timeout" level='level2' question='question1' show={showAlertTimeout} />
                <Alert view={() => navigation.navigate("Nivel22")} type="error" level='level2' question='question1' show={showAlertError} />
                <Alert view={() => navigation.navigate("Nivel22")} type="success" level='level2' question='question1' show={showAlert} />
            </View>
            <Navigation/>
        </React.Fragment>
    );
}

export default Nivel2;     