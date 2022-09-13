import {
  Alert,
  Box,
  Button,
  Center,
  Image,
  ScrollView,
  Stack,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { FC } from 'react';
import { Dimensions } from 'react-native';
import { Col } from 'react-native-easy-grid';
import useComponents from '../../components';
import useControllers from '../../controllers';
import LoginStyles from './login.style';

const Login: FC = () => {
  // Components
  const { Inputs } = useComponents();
  const { BasicInput } = Inputs;

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useLogin } = useScreenHooks();

  const { control, handleLogin, handleSubmit, navigation, setShowAlert, showAlert } = useLogin();

  return (
    <ScrollView>
      <Image
        source={require('../../assets/images/Group.png')}
        style={{
          width: '100%',
          height: Dimensions.get('screen').height,
          flex: 1,
          resizeMode: 'stretch',
        }}
        alt="register"
      />
      <View style={LoginStyles.view}>
        <Center style={LoginStyles.title}>
          <Text style={LoginStyles.title_text}>Iniciar sesión</Text>
        </Center>
        <Col style={LoginStyles.containerInput}>
          <BasicInput
            control={control}
            label="Nombre y Apellido"
            name="fullname"
            placeholder=""
            rules={{}}
          />
          <Center style={LoginStyles.container_button}>
            <Button
              style={LoginStyles.button}
              onPress={handleSubmit(handleLogin)}>
              <Text style={LoginStyles.button_text}>{'Continuar >'}</Text>
            </Button>
            <Button
              style={[LoginStyles.button, { marginTop: '5%' }]}
              onPress={() => navigation.navigate('Home')}>
              <Text style={LoginStyles.button_text}>{' < Regresar '}</Text>
            </Button>
          </Center>
          {
            showAlert && (
              <Stack space={3} w="100%" position="absolute" style={{ bottom: '0%' }}>
                <Alert w="100%" status="error">
                  <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                    <Alert.Icon size="md" />
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      _dark={{
                        color: "coolGray.800",
                      }}
                    >
                      Ayyy no!!!, aun no estas registrado!
                    </Text>

                    <Box
                      _text={{
                        textAlign: "center",
                      }}
                      _dark={{
                        _text: {
                          color: "coolGray.600",
                        },
                      }}
                    >
                      Haz click en el siguiente boton y vamos a registrarnos para que puedas ingresar a nuestra app.
                    </Box>
                    <Center>
                      <Button
                        onPress={() => {
                          setShowAlert(false);
                          navigation.navigate('Register')
                        }}
                        style={{ backgroundColor: "#d50000", padding: 20 }}
                      >
                        <Text style={{ color: "#fff", fontWeight: "800" }}>Registrarse Ahora</Text>
                      </Button>
                    </Center>
                  </VStack>
                </Alert>
              </Stack>
            )
          }
        </Col>
      </View>
    </ScrollView>
  );
};

export default Login;
