import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import {theme} from '../core/theme';

import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

import AppLoading from '../screens/AppLoading';

// export the ref to access the navigation from any functions outside the Container
export const NavigationRef = createNavigationContainerRef();

// For white background across the App

const Route = () => {
  const {loading, setLoading} = useContext(AuthContext);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (loading) setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer ref={NavigationRef} theme={theme}>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;
