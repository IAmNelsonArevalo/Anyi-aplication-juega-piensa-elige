import { Button, Center, Image, Stack, Text, View, HStack, Checkbox } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { left } from 'styled-system';
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Prueba4Styles from './Prueba4.style';


const Prueba4: FC<IGeneralProps> = (props) => {
    

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
                source={require('../../assets/images/politicas3.png')}  
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Prueba4Styles.view}>
                <Stack style={Prueba4Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View style={Prueba4Styles.image2}>
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
                                source={require('../../assets/images/final.png')}
                                alt="Welcome's Image"
                                style={{ marginLeft: "30%", marginTop: "5%" }}
                            />
                        </View>
                        <Stack style={Prueba4Styles.image}>
                            <HStack display="flex" justifyContent="space-between" alignItems="center">
                                <View style={{ paddingTop: "5%" }}>
                                    <Image
                                        source={require('../../assets/images/barra4.png')}
                                        alt="Welcome's Image"
                                    />
                                </View>
                            </HStack>
                            <View style={{ paddingTop: "5%" }}>
                                <Image
                                    source={require('../../assets/images/texto-4.png')}
                                    alt="Welcome's Image"
                                />
                            </View>
                            <View style={{ paddingTop: "4%" }}>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            ¡Estuvo difícil! Es un gran reto
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            Algunas cosas fueron fáciles, otras, en cambio, difíciles
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack> 
                                <Stack style={{ marginBottom: "3%" }}> 
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "2.5%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            {`No es que sea difícil, pero estas personas son muy apresuradas. \n Eso se complica y no me gusta`}
                                            </Text>  
                                        </Checkbox>
                                    </HStack>
                                </Stack> 
                                <Stack style={{ marginBottom: "3%" }}> 
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('correct')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            ¡Me encantó esta actividad!
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                            </View>
                        </Stack>
                    </HStack> 
                </Stack>
                <Alert view={() => navigation.navigate("FelicidadesN3")} type="timeout" level='level3' question='question4' show={showAlertTimeout} />
                <Alert view={() => navigation.navigate("FelicidadesN3")} type="error" level='level3' question='question4' show={showAlertError} />
                <Alert view={() => navigation.navigate("FelicidadesN3")} type="success" level='level3' question='question4' show={showAlert} />
            </View>
            <Navigation  />
        </React.Fragment> 
    );
}

export default Prueba4;