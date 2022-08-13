import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput as Input} from 'react-native-paper';

import {theme} from '../core/theme';

export default function TextInput({
  errorText,
  description,
  initialText,
  style,
  icon,
  ...props
}) {
  return (
    <View style={styles.container}>
      <Input
        style={{...styles.input, ...style}}
        selectionColor={'#ddd'}
        underlineColor="transparent"
        mode="outlined"
        left={
          initialText ? (
            <Input.Affix text={initialText} />
          ) : icon ? (
            <Input.Icon icon={() => icon} />
          ) : null
        }
        {...props}
      />

      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    height: 60,
  },
  input: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.primary,
    ...theme.fonts.medium,
    fontSize: theme.size.regular,
    // height:60,
    // paddingHorizontal:5
  },
  description: {
    fontSize: theme.size.small,
    color: theme.colors.semiBlack,
    paddingTop: 8,
  },
  error: {
    fontSize: 10,
    color: theme.colors.error,
    ...theme.fonts.thin,
  },
  initialContainer: {
    alignItems: 'center',
    width: 100,
    height: '100%',
    alignSelf: 'flex-start',
  },
  initialText: {
    color: '#ccc',
    fontSize: theme.size.medium,
    ...theme.fonts.bold,
  },
});
