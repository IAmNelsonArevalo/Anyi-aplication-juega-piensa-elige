import useControllers from "../../controllers";
import { Button, Center, HStack, Image, Stack, Text, View } from "native-base";
import React, { FC, useCallback, useEffect } from "react";
import useComponents from '../../components/index';
import Vamos1Styles from "./vamos1.style";

const Vamos1: FC<{ navigation: any }> = ({ navigation }) => {
    // useEffect
    const handleConteo = useCallback(() => {
        setTimeout(() => {
            navigation.navigate("Prueba1");
        }, 1000);
    }, []);

    useEffect(() => {
        handleConteo();
    }, [handleConteo]);

    // Components
    const { Navigation } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/conteo.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Vamos1Styles.view}>
                <Stack style={Vamos1Styles.tabsContent}>
                    <HStack display="flex" justifyContent="center">
                        <View>
                            <Button variant="unstyled">
                                <Image
                                    source={require('../../assets/images/iniciar.png')}
                                    alt="Welcome's Image"
                                    style={{ marginTop: '37%' }}
                                />
                            </Button>
                        </View>
                    </HStack>
                </Stack>
            </View>
            <Navigation navigation={navigation} />
        </React.Fragment>
    );
}

export default Vamos1;



