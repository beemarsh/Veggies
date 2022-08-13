import {View, Text} from 'react-native';
import React from 'react';

import AppLoading from '../AppLoading';

function HomeTemplate() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default function Home() {
  return <AppLoading screen={HomeTemplate} />;
}
