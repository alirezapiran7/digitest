/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { color } from './src/constants';

import { Provider } from 'react-redux'
import store from './src/redux/storeconfig'
import Index from './src'

const App: () => React$Node = () => {


  return (
    <>
      <Provider store={store}>
        <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={color.transparent} />
        <View style={{ flex: 1 }}>
          <Index />
        </View>
      </Provider>
    </>
  );
};


export default App;
