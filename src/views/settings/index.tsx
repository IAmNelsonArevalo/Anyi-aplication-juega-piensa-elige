import { Alert, Box, Button, Center, CloseIcon, HStack, IconButton, Image, InputLeftAddon, Row, SimpleGrid, Stack, Text, View, VStack, ScrollView } from 'native-base';
import React, { FC } from "react";
import { Dimensions } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
import useComponents from '../../components';
import Navigation from '../../components/Navigation';
import useControllers from '../../controllers';
import SettingsStyles from './settings';

const Settings: FC<{ navigation: any }> = ({ navigation }) => {
    // Components
    const { Inputs } = useComponents();
    const { BasicInput } = Inputs;

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useSettings } = useScreenHooks();
    const {
        control,
        handleSubmit,
        handleChanges,
        isValid,
        isError,
        showAlert, 
        subtitleAlert,
        titleAlert
    } = useSettings();

    return (
        <ScrollView>
            <Image source={require('../../assets/images/politicas.png')} style={{ width: "100%", height: Dimensions.get('screen').height, flex: 1, resizeMode: 'stretch' }} alt="register" />
            <View style={SettingsStyles.view}>
                <Center style={SettingsStyles.title}>
                    <Text style={SettingsStyles.title_text}>Configuración</Text>
                </Center>
                <Row style={SettingsStyles.containerInputs}>
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
                <Row style={SettingsStyles.containerInputs2}>
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
                <Center style={SettingsStyles.container_button}>
                    <Button 
                        style={SettingsStyles.button}
                        onPress={handleSubmit(handleChanges)}
                        disabled={!isValid}
                        variant="unstyled"
                    >
                        <Image source={require('../../assets/images/guardar.png')} alt='guardar' />
                    </Button>
                </Center>
                {
                    showAlert && (
                        <Stack w="100%" position="absolute" style={{ bottom: '8.5%' }}>
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
                                </VStack>
                            </Alert>
                        </Stack>
                    )
                }
            </View>

            <Navigation page='settings'></Navigation>
        </ScrollView>
    );
}

export default Settings;