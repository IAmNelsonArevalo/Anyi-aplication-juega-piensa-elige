import { Alert, Box, Button, Center, CloseIcon, HStack, IconButton, Image, InputLeftAddon, Row, SimpleGrid, Stack, Text, View, VStack } from "native-base";
import React, { FC } from "react";
import { Dimensions, ScrollView } from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import useComponents from '../../components';
import useControllers from '../../controllers';
import RegisterStyles from './register.style';

const Register: FC<{ navigation: any }> = ({ navigation }) => {
    // Components
    const { Inputs } = useComponents();
    const { BasicInput } = Inputs;

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useRegister } = useScreenHooks();
    const {
        control,
        handleRegister,
        handleSubmit,
        isValid,
        isError,
        setShowAlert,
        showAlert,
        subtitleAlert,
        titleAlert
    } = useRegister({ navigation });

    return (
        <ScrollView>
            <Image source={require('../../assets/images/Group.png')} style={{ width: "100%",  height: Dimensions.get('screen').height, flex: 1, resizeMode: 'stretch' }} alt="register" />
            <View style={RegisterStyles.view}>
                <Center style={RegisterStyles.title}>
                    <Text style={RegisterStyles.title_text}>Registrarse</Text>
                </Center>
                <Row style={RegisterStyles.containerInputs}>
                    <Col style={{ paddingRight: '10%' }}>
                        <BasicInput
                            control={control}
                            label="Nombre de la farmacia"
                            name="pharmacy"
                            placeholder=""
                            rules={{
                                required: {
                                    value: true,
                                    message: "El campo es requerido"
                                }
                            }}
                        />
                    </Col>
                    <Col>
                        <BasicInput
                            control={control}
                            label="Nombre y Apellido"
                            name="fullname"
                            placeholder=""
                            rules={{
                                required: {
                                    value: true,
                                    message: "El campo es requerido"
                                }
                            }}
                        />
                    </Col>
                </Row>
                <Row style={RegisterStyles.containerInputs2}>
                    <Col>
                        <BasicInput
                            control={control}
                            label="Correo Electronico"
                            name="email"
                            placeholder=""
                            rules={{
                                required: {
                                    value: true,
                                    message: "El campo es requerido"
                                }
                            }}
                        />
                    </Col>
                </Row>
                <Center style={RegisterStyles.container_button}>
                    <Button 
                        style={RegisterStyles.button}
                        onPress={handleSubmit(handleRegister)}
                        disabled={!isValid}
                    >
                        <Text style={RegisterStyles.button_text}>{"Continuar >"}</Text>
                    </Button>
                    <Button 
                        style={[RegisterStyles.button , { marginTop: '2%' }]}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={RegisterStyles.button_text}>{"< Regresar"}</Text>
                    </Button>
                </Center>
                {
                    showAlert && (
                        <Stack space={3} w="100%" position="absolute" style={{ bottom: '0%' }}>
                            <Alert w="100%" status={isError ? "error" : "success"}>
                                <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                                    <Alert.Icon size="md" />
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        _dark={{
                                            color: "coolGray.800",
                                        }}
                                    >
                                        {titleAlert}
                                    </Text>

                                    <Box
                                        _text={{
                                            textAlign: "center",
                                        }}
                                        _dark={{
                                            _text: {
                                                color: "coolGray.600",
                                            },
                                        }}
                                    >
                                        {subtitleAlert}
                                    </Box>
                                    {
                                        !isError && (
                                            <Center>
                                                <Button
                                                    onPress={() => {
                                                        setShowAlert(false);
                                                        navigation.navigate('Login')
                                                    }}
                                                    style={RegisterStyles.login_button}
                                                >
                                                    <Text style={RegisterStyles.text_button_login}>Ingresar Ahora</Text>
                                                </Button>
                                            </Center>
                                        )
                                    }
                                </VStack>
                            </Alert>
                        </Stack>
                    )
                }
            </View>
        </ScrollView>
    );
}

export default Register;