import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import FormScreen from '../screens/FormScreen';

const RootStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen
    },
    Home: {
      screen: HomeScreen
    },
    Form: {
      screen: FormScreen
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: '#558fd3',
    accentColor: '#558fd3'
    // primaryColor: '#4676ad',
  },
  toolbar: {
    container: {
      height: 50
    }
  }
};

export default () => {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <RootStack />
    </ThemeContext.Provider>
  );
};
