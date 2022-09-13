import { Button, Image, View } from 'native-base';
import React, { FC, useCallback, useState } from 'react'
import PistaAssets from './assets';

const Pista: FC<{ question: string }> = ({ question }): JSX.Element => {
    // States
    const [showImage2, setShowImage2] = useState(false);
    const [showImage1, setShowImage1] = useState(undefined);
    const [start, setStart] = useState<boolean>(false);

    const pista = PistaAssets.find((item: any) => item.question === question);

    let time = 1;

    const interval = useCallback(() => {
        const i = setInterval(() => {
            if (time === 1) {
                setShowImage1(pista?.green);
                setStart(true);
                time++;
            } else if (time === 2) {
                time++;
            } else if (time === 3) {
                time++;
            } else {
                setStart(false);
                setShowImage2(true)
                clearInterval(i)
            }

            console.log(time)
        }, 2000)
    }, [time])

    const startPista = () => {
        interval();
    }

    return (
        <React.Fragment>
            {
                !start ? (
                    <View style={{ marginTop: "6%", position: "relative", marginRight: "45%" }}>
                        {
                            showImage2 ? (
                                <Image
                                    source={require('../../assets/images/EnabledPista.png')}
                                    alt="Welcome's Image"
                                />
                            ) : (
                                <Button variant="unstyled" onPress={() => startPista()}>
                                    <Image
                                        source={require('../../assets/images/pista.png')}
                                        alt="Welcome's Image"
                                    />
                                </Button>
                            )
                        }
                    </View>
                ) : (
                    <View style={{ marginTop: "6%", position: "relative", marginRight: "45%" }}>
                        <Image
                            source={showImage1}
                            alt="Welcome's Image"
                        />
                    </View>
                )
            }
        </React.Fragment>
    )
}

export default Pista;
