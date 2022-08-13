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
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

export const Stack = createStackNavigator();

export default class AuthStack extends Component {
  state = {isLoading: false};
  render() {
    // Show a Loader Until a asynchronous fetch is done

    if (this.state.isLoading) {
      //   return <VeggiesLogoStartupScreen />;
    } else {
      // Render either OnBoarding Screen or LoginScreen Based on isFirstAppUse state.

      return (
        <Stack.Navigator
          // initialRouteName={initialRoute}
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={Login} name="LOGIN" />

          <Stack.Screen component={Register} name="REGISTER" />
        </Stack.Navigator>
      );
    }
  }
}
