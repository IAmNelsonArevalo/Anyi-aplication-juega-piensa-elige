import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Level3Styles from './level3.style';

const Level3: FC<IGeneralProps> = (props) => {

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
            <View style={Level3Styles.view}>
                <View style={Level3Styles.subContent}>
                    <Button variant="unstyled" onPress={() => navigation.navigate('Conteo1')}>
                        <Image
                            source={require('../../assets/images/pruba.png')}
                            alt="Intructions' Image"
                        />
                    </Button>
                </View>
            </View>
            <Navigation  />
        </React.Fragment>
    );
}

export default Level3;