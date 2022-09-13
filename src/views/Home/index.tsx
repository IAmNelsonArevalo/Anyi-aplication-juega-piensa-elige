import { Image, Text, Button, View, Checkbox, Center, Alert, VStack, HStack, IconButton } from 'native-base';
import React, { FC, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import HomeStyles from './home.style';

const Home: FC<{ navigation: any, route: any }> = (props): JSX.Element => {
    // Props
    const { navigation, route } = props;

    // const { accepted } = route.params;

    const [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (route.params?.accepted) {
            setDisabled(true);
        }
    }, [route.params?.accepted, setDisabled])

    return (
        <>
            <Image source={require('../../assets/images/homme1.png')} style={{ width: "100%", flex: 1, resizeMode: 'stretch' }} alt="home" />
            <View style={HomeStyles.view}>
                <Button colorScheme='red' style={HomeStyles.buttoms} onPress={() => navigation.navigate('Register')}>
                    <Image source={require('../../assets/images/BOTON1.png')} alt="home" />
                </Button>
                <Button style={HomeStyles.buttoms} onPress={() => navigation.navigate('Login')}>
                    <Image source={require('../../assets/images/sesion.png')} alt="home" />
                </Button>
                {
                    route.params === undefined && (
                        <React.Fragment>
                            <Center>
                                <Text style={HomeStyles.Politica} onPress={() => navigation.navigate('Politica')}>
                                    Política de privacidad
                                </Text>
                            </Center>
                            <Alert w="100%" status="info" style={{ marginTop: "5%", backgroundColor: '#DB0862', borderRadius: 25 }}>
                                <VStack space={2} flexShrink={1} w="100%">
                                    <HStack flexShrink={1} space={2} justifyContent="space-between">
                                        <HStack space={2} flexShrink={1}>
                                            <Alert.Icon mt="1" />
                                            <Text fontSize="xs" color="white">
                                            {`Debes aceptar las politicas de privacidad`}
                                            </Text>
                                        </HStack>
                                    </HStack>
                                </VStack>
                            </Alert>
                        </React.Fragment>
                    )
                }
            </View>
        </>
    );
};

export default Home;