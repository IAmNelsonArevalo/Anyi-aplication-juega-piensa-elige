import useControllers from '../../controllers';
import {Button, Center, HStack, Image, Stack, Text, View} from 'native-base';
import React, {FC, useEffect} from 'react';
import FelicidadesN2Styles from './felicidades2.style';
import useComponents from '../../components/index';
import useApi from '../../api';
import Sound from 'react-native-sound';
import { Alert } from 'react-native';

const FelicidadesN2: FC<{navigation: any}> = ({navigation}) => {
  const redirect = (): void => {
    navigation.navigate('Home');
  };

  const redirectLogin = (): void => {
    navigation.navigate('Login');
  };

  // Controller
  const {useScreenHooks} = useControllers();
  const {useWelcome, useQuestions} = useScreenHooks();
  const {setLevel} = useWelcome();
  const { handleCongratulations } = useQuestions(true);

  useEffect(() => {
    let launchCongratulations = new Sound(require('../../assets/audio/pregunta-correcta.mp3'), (error: boolean) => {
      if(!error){
        launchCongratulations.play();
      }else{
        Alert.alert('Fallo la reproducción...');
      }
    })
    setLevel(2);
  }, [setLevel]); 

  // Components
  const {Navigation} = useComponents();

  return (
    <React.Fragment>
      <Image
        source={require('../../assets/images/polity2.png')}
        alt="Welcome's Background"
        style={{width: '100%', flex: 1, resizeMode: 'stretch'}}
      />
      <View style={FelicidadesN2Styles.view}>
        <Stack style={FelicidadesN2Styles.titleContent}>
          <HStack display="flex" justifyContent="space-between">
            <View>
              <Image
                source={require('../../assets/images/felicidades.png')}
                alt="Welcome's Image"
              />
              <Image
                source={require('../../assets/images/nivel-3-3.png')}
                alt="Welcome's Image"
                style={{marginTop: '-18%', marginLeft: '23%'}}
              />
            </View>
          </HStack>
        </Stack>
        <Stack style={FelicidadesN2Styles.tabsContent}>
          <HStack display="flex" justifyContent="center">
            <View>
              <Button
                variant="unstyled"
                onPress={() => navigation.navigate('Level2')}>
                <Image
                  source={require('../../assets/images/volverjugar.png')}
                  alt="Welcome's Image"
                  style={{marginTop: '25%'}}
                />
              </Button>
            </View>
            <View>
              <Button variant="unstyled" onPress={() => {}}>
                <Image
                  source={require('../../assets/images/nivel-2.png')}
                  alt="Welcome's Image"
                />
              </Button>
            </View>
            <View>
              <Button
                variant="unstyled"
                onPress={() => navigation.navigate('Instrucciones1')}>
                <Image
                  source={require('../../assets/images/nivel-3.png')}
                  alt="Welcome's Image"
                  style={{marginTop: '16%'}}
                />
              </Button>
            </View>
          </HStack>
        </Stack>
      </View>
      <Navigation />
    </React.Fragment>
  );
};

export default FelicidadesN2;
