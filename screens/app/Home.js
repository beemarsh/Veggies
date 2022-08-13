import {View, Text} from 'react-native';
import React from 'react';
// Templates
import AppLoading from '../AppLoading';
import {AuthContext} from '../../routes/AuthProvider';
// Styles

function HomeTemplate() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default function Home() {
  const {loading} = React.useContext(AuthContext);
  return <AppLoading screen={<HomeTemplate />} start={loading} />;
}
