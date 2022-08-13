import React, {Component} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';

import {Provider} from 'react-native-paper';
import {theme} from '../core/theme';
//
import Home from '../screens/app/Home';

export const Stack = createStackNavigator();

export default class AppStack extends Component {
  render() {
    // Show a Loader Until a asynchronous fetch is done

    if (this.state.isLoading) {
      //   return <VeggiesLogoStartupScreen />;
    } else {
      // Render either OnBoarding Screen or LoginScreen Based on isFirstAppUse state.

      return (
        <Provider theme={theme}>
          <Stack.Navigator
            // initialRouteName={initialRoute}
            screenOptions={{headerShown: false}}>
            <Stack.Screen component={Home} name="HOME" />
          </Stack.Navigator>
        </Provider>
      );
    }
  }
}
