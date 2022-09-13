import useControllers from '../../controllers';
import {Button, Center, HStack, Image, Stack, Text, View} from 'native-base';
import React, {FC, useEffect} from 'react';
import FelicidadesN1Styles from './felicidades.style';
import useComponents from '../../components/index';
import useApi from '../../api';
import useModels from '../../models/index';
import {useSelector} from 'react-redux';
import Sound from 'react-native-sound';
import { Alert } from 'react-native';

const FelicidadesN1: FC<{navigation: any}> = ({navigation}) => {

  // Controller
  const {useScreenHooks} = useControllers();
  const {useWelcome} = useScreenHooks();
  const {setLevel} = useWelcome();

  useEffect(() => {
    setLevel(1);
    let launchCongratulations = new Sound(require('../../assets/audio/pregunta-correcta.mp3'), (error: boolean) => {
      if(!error){
        launchCongratulations.play();
      }else{
        Alert.alert('Fallo la reproducción...');
      }
    })
  }, []);

  // Components
  const {Navigation} = useComponents();

  return (
    <React.Fragment>
      <Image
        source={require('../../assets/images/polity2.png')}
        alt="Welcome's Background"
        style={{width: '100%', flex: 1, resizeMode: 'stretch'}}
      />
      <View style={FelicidadesN1Styles.view}>
        <Stack style={FelicidadesN1Styles.titleContent}>
          <HStack display="flex" justifyContent="space-between">
            <View>
              <Image
                source={require('../../assets/images/felicidades.png')}
                alt="Welcome's Image"
              />
              <Image
                source={require('../../assets/images/felicidadtext.png')}
                alt="Welcome's Image"
                style={{marginTop: '-19.5%', marginLeft: '22%'}}
              />
            </View>
          </HStack>
        </Stack>
        <Stack style={FelicidadesN1Styles.tabsContent}>
          <HStack display="flex" justifyContent="center">
            <View>
              <Button
                variant="unstyled"
                onPress={() => navigation.navigate('Level1')}>
                <Image
                  source={require('../../assets/images/volverjugar.png')}
                  alt="Welcome's Image"
                  style={{marginTop: '22%'}}
                />
              </Button>
            </View>
            <View>
              <Button variant="unstyled" onPress={() => {}}>
                <Image
                  source={require('../../assets/images/nivel1.png')}
                  alt="Welcome's Image"
                />
              </Button>
            </View>
            <View>
              <Button
                variant="unstyled"
                onPress={() => navigation.navigate('Instruciones2')}>
                <Image
                  source={require('../../assets/images/nivel2.png')}
                  alt="Welcome's Image"
                  style={{marginTop: '13%'}}
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

export default FelicidadesN1;
