/**
 * @format
 */

 import React, { Suspense } from 'react';
 import { AppRegistry } from 'react-native';
 import { name as appName } from './app.json';
 import { Provider } from "react-redux";
 import { PersistGate } from 'redux-persist/lib/integration/react';
 import useStore from "./src/config";
 import App from './App';
 import { NativeBaseProvider, Text } from 'native-base';
 
 const AppIndex = () => {
     const { store, persistor } = useStore();
 
     return (
         <NativeBaseProvider>
             <Suspense fallback={<Text>...Cargando!</Text>}>
                 <Provider store={store}>
                     <PersistGate persistor={persistor} loading={false}>
                         <App />
                     </PersistGate>
                 </Provider>
             </Suspense>
         </NativeBaseProvider>
     );
 }
 
 AppRegistry.registerComponent(appName, () => AppIndex);
 