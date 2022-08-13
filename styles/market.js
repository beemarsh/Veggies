import {theme} from '../core/theme';
import {StyleSheet} from 'react-native';

export const MarketStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: theme.size.large,
    color: theme.colors.white,
    marginVertical: 20,
    ...theme.fonts.bold,
  },
  container: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 15,
    elevation: 2,
  },
  rippleContainer: {
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: theme.colors.white,
  },
  unitContainer: {
    paddingVertical: 15,
    paddingHorizontal: 7,
    flexDirection: 'row',
    flex: 10,
  },
  imageContainer: {flex: 2, justifyContent: 'center', alignItems: 'flex-start'},
  image: {height: 40, resizeMode: 'contain', width: 40},
  unit_nameContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  unit_name: {fontSize: theme.size.medium - 1, ...theme.fonts.semiBold},
  date: {
    fontSize: theme.size.regular,
    marginLeft: 5,
    ...theme.fonts.regular,
  },
  avaibilityContainer: {
    borderRadius: 30,
    borderWidth: 0.3,
    paddingVertical: 2,
    width: '100%',
    backgroundColor: theme.colors.white,
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  general: {
    fontSize: theme.size.extraMedium,
    marginLeft: 10,
    ...theme.fonts.semiBold,
  },
  instructions: {
    fontSize: theme.size.medium - 1,
    marginLeft: 10,
    ...theme.fonts.medium,
  },
  button: {
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 3,
    marginLeft: 10,
    marginVertical: 5,
  },
  text: {
    color: theme.colors.primary,
    fontSize: theme.size.regular,
    marginLeft: 5,
  },
});
