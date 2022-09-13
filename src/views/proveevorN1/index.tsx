import { Button, Center, Image, Stack, Text, View, HStack, Checkbox } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { left } from 'styled-system';
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import ProveedorStyles from './proveedor.style';

const ProveedorN1: FC<IGeneralProps> = (props) => {
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
    const { Alert, Navigation } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politica2.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={ProveedorStyles.view}>
                <Stack style={ProveedorStyles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View style={ProveedorStyles.image2}>
                            <Stack>
                                <HStack display="flex" justifyContent="space-between">
                                    <View>
                                        <Image
                                            source={require('../../assets/images/level-1.png')}
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
                                source={require('../../assets/images/proveedor.png')}
                                alt="Welcome's Image"
                                style={{ marginLeft: "30%", marginTop: "5%" }}
                            />
                        </View>
                        <Stack style={ProveedorStyles.image}>
                            <HStack display="flex" justifyContent="space-between" alignItems="center">
                                <View style={{ paddingTop: "5%" }}>
                                    <Image
                                        source={require('../../assets/images/barraProgreso.png')}
                                        alt="Welcome's Image"
                                    />
                                </View>
                            </HStack>
                            <View style={{ paddingTop: "4%" }}>
                                <Image
                                    source={require('../../assets/images/texto.png')}
                                    alt="Welcome's Image"
                                />
                            </View>
                            <View style={{ paddingTop: "4%" }}>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Berifén™ parche transdérmico subdérmico
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Berifén™ Yacht, parche transdérmico intradérmico
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('correct')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Berifén™ Parche transdérmico
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                            </View>
                        </Stack>
                    </HStack>
                </Stack>
                <Alert view={() => navigation.navigate("ProveedorN2")} level="level1" type="timeout" question='question1' show={showAlertTimeout} />
                <Alert view={() => navigation.navigate("ProveedorN2")} level="level1" type="error" question='question1' show={showAlertError} />
                <Alert view={() => navigation.navigate("ProveedorN2")} level="level1" type="success" question='question1' show={showAlert} />
            </View>
            <Navigation/>
        </React.Fragment>
    );
}

export default ProveedorN1;