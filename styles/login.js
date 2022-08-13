import {StyleSheet} from 'react-native';
import {theme} from '../core/theme';

export const LoginStyles = StyleSheet.create({
  background: {
    width: '100%',
    backgroundColor: theme.colors.background,
    // alignSelf: 'center',
  },
  container: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  forgot: {
    fontSize: theme.size.small,
    color: theme.colors.primary,
    ...theme.fonts.medium,
  },
  link: {
    color: theme.colors.primary,
    fontSize: theme.size.medium,
    marginLeft: 10,
    ...theme.fonts.medium,
  },
  or: {
    marginVertical: 10,
    color: theme.colors.primary,
  },
  instead: {
    fontSize: theme.size.small,
    color: theme.colors.black,
    ...theme.fonts.medium,
  },
  title: {
    fontSize: theme.size.large,
    fontWeight: 'bold',
    ...theme.fonts.bold,
  },
});
