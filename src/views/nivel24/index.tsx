import { Button, Center, Image, Stack, Text, View, HStack, Checkbox } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { left } from 'styled-system';
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Nivel24Styles from './nivel24.style';


const Nivel24: FC<IGeneralProps> = (props) => {
    const { navigation } = props;

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useQuestions } = useScreenHooks();
    const { time, showAlert, showAlertError, showAlertTimeout, handleResponse } = useQuestions(true);

    // Components
    const { Alert, Navigation, Pista } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/fondo55.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Nivel24Styles.view}>
                <Stack style={Nivel24Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View style={Nivel24Styles.image2}>
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
                                source={require('../../assets/images/dolores3.png')}
                                alt="Welcome's Image"
                                style={{ marginLeft: "30%", marginTop: "5%" }}
                            />
                        </View>
                        <Stack style={Nivel24Styles.image}>
                            <HStack display="flex" justifyContent="space-between" alignItems="center">
                                <View style={{ paddingTop: "5%", marginLeft: "-7%" }}>
                                    <Image
                                        source={require('../../assets/images/barra4.png')}
                                        alt="Welcome's Image"
                                    />
                                </View>
                                <HStack>
                                    <Pista question="question4" />
                                </HStack>
                            </HStack>
                            <View style={{ paddingTop: "1%" }}>
                                <Image
                                    source={require('../../assets/images/hola3.png')}
                                    alt="Welcome's Image"
                                />
                            </View>
                            <View style={{ paddingTop: "1%" }}>
                                <Stack style={{ marginBottom: "1%" }}>   
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "1%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                {`Tabletas de Decatileno™, que contienen en fórmula galénica \n cloruro de  decualinio 0,25 mg y clorhidrato \n  de cincocaína 0,03 mg`}
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>  
                                <Stack style={{ marginBottom: "2%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={(isSelected: boolean) => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                {`Cápsulas de Uvamín™ retard que  contienen \n 100 mg de nitrofurantoína`}
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "2%" }}>
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('incorrect')}>
                                            <Text style={{ marginLeft: "3%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                                {`Berifén™ 1 % gel, que contiene como principio activo \n 10 mg de diclofenaco sódico`}
                                            </Text>
                                        </Checkbox>
                                    </HStack>
                                </Stack>
                                <Stack style={{ marginBottom: "2%" }}>  
                                    <HStack>
                                        <Checkbox value='' colorScheme='orange' style={{ borderColor: "orange", width: 25, height: 25 }} onChange={() => handleResponse('correct')}>
                                            <Text style={{ marginLeft: "3%", borderBottomColor: "orange", borderBottomWidth: 1 }}>
                                            {`Berifén™ cápsulas de liberación prolongada con 100 mg de diclofenaco sódico`}
                                            </Text>
                                        </Checkbox> 
                                    </HStack>
                                </Stack>
                            </View>
                        </Stack>
                    </HStack>
                </Stack>
                <Alert view={() => navigation.navigate("FelicidadesN2")} type="timeout" level='level2' question='question4' show={showAlertTimeout} />
                <Alert view={() => navigation.navigate("FelicidadesN2")} type="error" level='level2' question='question4' show={showAlertError} />
                <Alert view={() => navigation.navigate("FelicidadesN2")} type="success" level='level2' question='question4' show={showAlert} />
            </View>
            <Navigation/>
        </React.Fragment>
    );
}

export default Nivel24;     