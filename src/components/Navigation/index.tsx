import {Button, HStack, Image, Stack, Text, View} from 'native-base';
import React, {FC} from 'react';
import { width } from 'styled-system';
import useControllers from '../../controllers';
import {INavigationProps} from '../../models/interfaces/components/Navigation';
import NavigationStyles from './navigation.style';

const Navigation: FC<INavigationProps> = props => {
  /** Props */
  const {page} = props;

  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useWelcome} = useScreenHooks();
  const {user, logout, navigation} = useWelcome();

  return (
    <Stack style={NavigationStyles.View2}>
      <HStack space={3} justifyContent="center">
        <HStack style={[NavigationStyles.center, NavigationStyles.col]}>
          <Image
            source={require('../../assets/images/iconUser.png')}
            alt="User's Icon"
            style={{width: 30, height: 30}}
          />
          <Text style={{color: 'white', marginLeft: '2%', width: '40%'}}>
            {user?.fullname}
          </Text>
        </HStack>
        <HStack
          style={[
            NavigationStyles.center,
            NavigationStyles.col2,
            {paddingLeft: '8%'},
          ]}
          justifyContent="center">
          <View style={{paddingHorizontal: '5%'}}>
            {page && page === 'settings' ? (
              <Button
                onPress={() => navigation.navigate('Settings')}
                variant="unstyled">
                <Image
                  source={require('../../assets/images/SelectedSettings.png')}
                  alt="Instructions's Icon"
                />
              </Button>
            ) : (
              <Button
                onPress={() => navigation.navigate('Settings')}
                variant="unstyled">
                <Image
                  source={require('../../assets/images/settings.png')}
                  alt="Instructions's Icon"
                />
              </Button>
            )}
          </View>
          <View style={{paddingHorizontal: '5%'}}>
            {page && page === 'home' ? (
              <Button
                onPress={() => navigation.navigate('Welcome')}
                variant="unstyled">
                <Image
                  source={require('../../assets/images/SelectedHome.png')}
                  alt="Instructions's Icon"
                />
              </Button>
            ) : (
              <Button
                onPress={() => navigation.navigate('Welcome')}
                variant="unstyled">
                <Image
                  source={require('../../assets/images/HomeIcon.png')}
                  alt="Instructions's Icon"
                />
              </Button>
            )}
          </View>
          <View style={{paddingHorizontal: '5%'}}>
            {page && page === 'instructions' ? (
              <Button
                onPress={() => navigation.navigate('Instructions')}
                variant="unstyled">
                <Image
                  source={require('../../assets/images/SelectedIntructions.png')}
                  alt="Instructions's Icon"
                />
              </Button>
            ) : (
              <Button
                onPress={() => navigation.navigate('Instructions')}
                variant="unstyled">
                <Image
                  source={require('../../assets/images/instructions.png')}
                  alt="Instructions's Icon"
                />
              </Button>
            )}
          </View>
        </HStack>
        <HStack
          style={[NavigationStyles.center, NavigationStyles.col3]}
          justifyContent="center">
          <Button onPress={logout} variant="unstyled">
            <Image
              source={require('../../assets/images/exit.png')}
              alt="User's Icon"
            />
          </Button>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Navigation;
