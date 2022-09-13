import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import InstructionsStyles from './instructions.styles';

const Instructions3: FC<IGeneralProps> = (props) => {

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
            <View style={InstructionsStyles.view}>
                <View style={InstructionsStyles.subContent}>
                    <Button variant="unstyled" onPress={() => navigation.navigate('Level1')}>
                        <Image
                            source={require('../../assets/images/Instructions3.png')}
                            alt="Intructions' Image"
                        />
                    </Button>
                </View>
            </View>
            <Navigation  page="instructions" />
        </React.Fragment>
    );
}

export default Instructions3;