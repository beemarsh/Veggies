import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';

import { theme } from '../core/theme';

export default function Button({
  mode,
  style,
  contentStyle,
  labelStyle,
  ...props
}) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && {...styles.outlined},
        style,
      ]}
      contentStyle={{...styles.buttonContent, ...contentStyle}}
      labelStyle={{
        ...styles.text,
        color: mode == 'outlined' ? '#000' : '#fff',
        ...labelStyle,
      }}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
  },
  buttonContent: {
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: theme.size.medium,
    textAlign: 'left',

    ...theme.fonts.medium,
  },
  outlined: {
    backgroundColor: theme.colors.surface,
  },
});
