import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Instrucciones2Styles from './instruciones2.style';

const Instrucciones1: FC<IGeneralProps> = (props) => {

    // Components
    const { Navigation } = useComponents();

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { user, navigation } = useWelcome();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Instrucciones2Styles.view}>
                <Button 
                    style={Instrucciones2Styles.subContent} 
                    variant="unstyled"
                    onPress={() => navigation.navigate('Instrucciones2')}
                >
                    <Image
                        source={require('../../assets/images/user.png')}
                        alt="Welcome's Background"
                        style={{}}
                    />
                </Button>
            </View>
            <Navigation  page="instructions" />
        </React.Fragment>
    );
}

export default Instrucciones1;  