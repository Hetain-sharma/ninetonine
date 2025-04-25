// App.js

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {ToastProvider} from './src/service/ToastProvider';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  useEffect(() => {
    const init = async () => {
      // Load fonts, fetch data, or perform any initial setup here
    };

    init().finally(() => {
      BootSplash.hide({fade: true});
      console.log('Splash screen hidden');
    });
  }, []);

  return (
    // Inside return of App component
    <ToastProvider>
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content" // black icons
          backgroundColor="#ffffff" // white background
          translucent={false} // no transparency
        />
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    </ToastProvider>
  );
};

export default App;
