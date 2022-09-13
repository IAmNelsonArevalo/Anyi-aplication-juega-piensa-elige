import { Button, Center, Image, Stack, Text, View, HStack, Checkbox } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { left } from 'styled-system';
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Prueba3Styles from './Prueba3.style';


const Prueba3: FC<IGeneralProps> = (props) => {
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
                source={require('../../assets/images/prueba-2-22.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Prueba3Styles.view}>
                <Stack style={Prueba3Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View style={Prueba3Styles.image2}>
                            <Stack>
                                <HStack display="flex" justifyContent="space-between">
                                    <View>
                                        <Image
                                            source={require('../../assets/images/prueba3.png')}
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
                                source={require('../../assets/images/prueba-2.png')}
                                alt="Welcome's Image"
                                style={{ marginLeft: "30%", marginTop: "5%" }}
                            />
                        </View>
                        <Stack style={Prueba3Styles.image}>
                            <HStack display="flex" justifyContent="space-between" alignItems="center">
                                <View style={{ paddingTop: "5%" }}>
                                    <Image
                                        source={require('../../assets/images/barra3.png')}
                                        alt="Welcome's Image"
                                    />
                                </View>
                            </HStack>
                            <View style={{ paddingTop: "5%" }}>
                                <Image
                                    source={require('../../assets/images/prueba-2-2.png')}
                                    alt="Welcome's Image"
                                />
                            </View>
                            <View style={{ paddingTop: "4%" }}>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            {`Tomándolo con abundante agua durante o después \n de las comidas`}
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('correct')}>
                                            <Text style={{ marginLeft: "6%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Chupar 1 tableta cada 2 horas
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack> 
                                <Stack style={{ marginBottom: "3%" }}> 
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3.5%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Disolviendo el contenido de las cápsulas en un vaso de agua
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                            </View>
                        </Stack>
                    </HStack> 
                </Stack>
                <Alert view={() => navigation.navigate("Prueba4")} type="timeout" level='level3' question='question3' show={showAlertTimeout} />
                <Alert view={() => navigation.navigate("Prueba4")} type="error" level='level3' question='question3' show={showAlertError} />
                <Alert view={() => navigation.navigate("Prueba4")} type="success" level='level3' question='question3' show={showAlert} />
            </View>
            <Navigation/>
        </React.Fragment> 
    );
}

export default Prueba3;