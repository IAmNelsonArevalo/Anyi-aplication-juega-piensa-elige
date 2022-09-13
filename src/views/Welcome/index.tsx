import useControllers from '../../controllers';
import {Button, Center, HStack, Image, Stack, Text, View} from 'native-base';
import React, {FC, useEffect, useState} from 'react';
import WelcomeStyles from './welcome.style';
import useComponents from '../../components/index';
import useApi from '../../api';
import { ICallback } from '../../models/interfaces/general';

const Welcome: FC = () => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useWelcome} = useScreenHooks();
  const {user, navigation, level2, level3} = useWelcome();
  
  /** Components */
  const {Navigation} = useComponents();

  return (
    <React.Fragment>
      <Image
        source={require('../../assets/images/politicas.png')}
        alt="Welcome's Background"
        style={{width: '100%', flex: 1, resizeMode: 'stretch'}}
      />
      <View style={WelcomeStyles.view}>
        <Stack style={WelcomeStyles.titleContent}>
          <HStack display="flex" justifyContent="space-between">
            <View>
              <Text style={WelcomeStyles.title_text2}>
                ¡Hola, {user.fullname}!
              </Text>
              <Text style={WelcomeStyles.title_text3} 
               
              >
              {`Bienvenido a  Villa Dolores`}
              </Text>
            </View>
            <Image
              source={require('../../assets/images/Logo.png')}
              alt="Welcome's Image"
            />
          </HStack>
        </Stack>
        <Stack style={WelcomeStyles.tabsContent}>
          <HStack display="flex" justifyContent="center">
            <View>
              <Button
                variant="unstyled"
                onPress={() => navigation.navigate('Instructions')}>
                <Image
                  source={require('../../assets/images/Level1.png')}
                  alt="Welcome's Image"
                />
              </Button>
            </View>
            <View>
              {level2 && (
                <Button
                  variant="unstyled"
                  onPress={() => navigation.navigate('Instruciones2')}>
                  <Image
                    source={require('../../assets/images/acti.png')}
                    alt="Welcome's Image"
                  />
                </Button>
              )}
              {!level2 && (
                <Button variant="unstyled">
                  <Image
                    source={require('../../assets/images/Level2.png')}
                    alt="Welcome's Image"
                  />
                </Button>
              )}
            </View>
            <View>
              {level3 && (
                <Button
                  variant="unstyled"
                  onPress={() => navigation.navigate('Instrucciones1')}>
                  <Image
                    source={require('../../assets/images/acti1.png')}
                    alt="Welcome's Image"
                  />
                </Button>
              )}
              {!level3 && (
                <Button variant="unstyled">
                  <Image
                    source={require('../../assets/images/Level3.png')}
                    alt="Welcome's Image"
                  />
                </Button>
              )}
            </View>
          </HStack>
        </Stack>
      </View>
      <Navigation page="home" />
    </React.Fragment>
  );
};

export default Welcome;
