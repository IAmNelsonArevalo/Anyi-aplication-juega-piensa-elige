import { Button, Center, Image, Stack, Text, View, HStack, Checkbox } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { left } from 'styled-system';
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import ProveedorN3Styles from './proveedorN3.style';


const ProveedorN3: FC<IGeneralProps> = (props) => {
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
                source={require('../../assets/images/politicas4.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={ProveedorN3Styles.view}>
                <Stack style={ProveedorN3Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View style={ProveedorN3Styles.image2}>
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
                                source={require('../../assets/images/proveedor3.png')}
                                alt="Welcome's Image"
                                style={{ marginLeft: "30%", marginTop: "5%" }}
                            />
                        </View>
                        <Stack style={ProveedorN3Styles.image}>
                            <HStack display="flex" justifyContent="space-between" alignItems="center">
                                <View style={{ paddingTop: "5%" }}>
                                    <Image
                                        source={require('../../assets/images/barra3.png')}
                                        alt="Welcome's Image"
                                    />
                                </View>
                            </HStack>
                            <View style={{ paddingTop: "4%" }}>
                                <Image
                                    source={require('../../assets/images/texto3.png')}
                                    alt="Welcome's Image"
                                />
                            </View>
                            <View style={{ paddingTop: "2%" }}>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('correct')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Cápsulas de liberación prolongada
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Comprimidos gastrorresistentes recubiertos con película
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Cápsulas recubiertas con película para liberación prolongada
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "3%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "4%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                Comprimidos recubiertos con película
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                            </View>
                        </Stack>
                    </HStack>
                </Stack>
                <Alert view={() => navigation.navigate("ProveedorN4")} type="timeout" level='level1' question='question3' show={showAlertTimeout} />
                <Alert view={() => navigation.navigate("ProveedorN4")} type="error" level='level1' question='question3' show={showAlertError} />
                <Alert view={() => navigation.navigate("ProveedorN4")} type="success" level='level1' question='question3' show={showAlert} />
            </View>
            <Navigation/>
        </React.Fragment>
    );
}

export default ProveedorN3;