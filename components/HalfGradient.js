import {View, StyleSheet} from 'react-native';
import React from 'react';

import {theme, width} from '../core/theme';

import LinearGradient from 'react-native-linear-gradient';

export default function HalfGradientBackground({gradient}) {
  return (
    <View style={styles.halfBlueBackground}>
      <LinearGradient
        colors={gradient ? gradient : ['#56a1d5', '#077bcd', '#08739f']}
        style={styles.linearGradient}></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  halfBlueBackground: {
    width: '100%',
    height: width == 'big' ? 250 : 200,
    backgroundColor: theme.colors.primary,
    position: 'absolute',
  },
  linearGradient: {
    flex: 1,
  },
});
