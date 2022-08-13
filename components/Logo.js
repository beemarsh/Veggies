import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {width} from '../core/dimensions';

export default function Logo({style}) {
  return (
    <Image
      source={require('../assets/icons/logo.png')}
      style={{...styles.image, ...style}}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: width == 'big' ? 150 : 100,
    height: width == 'big' ? 150 : 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
});
