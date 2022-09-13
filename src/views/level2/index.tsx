import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Level2Styles from './level2.style';

const Level2: FC<IGeneralProps> = (props) => {

    // Components
    const { Navigation } = useComponents();

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { user,navigation } = useWelcome();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Level2Styles.view}>
                <View style={Level2Styles.subContent}>
                    <Button variant="unstyled" onPress={() => navigation.navigate('Conteo')}>
                        <Image
                            source={require('../../assets/images/velocidad.png')}
                            alt="Intructions' Image"
                        />
                    </Button>
                </View>
            </View>
            <Navigation  />
        </React.Fragment>
    );
}

export default Level2;