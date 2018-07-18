import React, { Component } from 'react';
import { Platform, StyleSheet, Text, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import Container from './components/Container';
import AppNavigator from './navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './state/store';

const { store, persistor } = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
            {/* <View style={{ backgroundColor: '#4676ad', height: 24 }} /> */}
            <View style={{ backgroundColor: '#558fd3', height: 24 }} />
            <AppNavigator />
          </Container>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
