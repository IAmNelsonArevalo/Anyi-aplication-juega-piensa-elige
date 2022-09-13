import React, { FC } from "react";
import { Button, Center, Image, Text, View } from "native-base";
import PoliticaStyles from "./politica.style";
import { Linking } from "react-native";


const Politica: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <>
            <Image source={require('../../assets/images/Group.png')} style={{ width: "100%", flex: 1, resizeMode: 'stretch' }} alt="politica" />
            <View style={PoliticaStyles.view}>
                <Center style={PoliticaStyles.title}>
                    <Text style={PoliticaStyles.title_text}>Políticas de privacidad</Text>
                </Center>
                <Center>
                <Button variant="unstyled" onPress={() => Linking.openURL('https://acino.swiss/privacy')}>
                    <Image source={require('../../assets/images/Group1.png')} alt="politica1" />
                </Button>
                </Center>

                <Center style={PoliticaStyles.container_button}>
                    <Button 
                        style={PoliticaStyles.button}
                        onPress={() => navigation.navigate('Home', {
                            accepted: true
                        })}
                    >
                        <Text style={PoliticaStyles.button_text}>{"Aceptar"}</Text>
                    </Button>
                </Center>
            </View>
        </>
    )
}

export default Politica;