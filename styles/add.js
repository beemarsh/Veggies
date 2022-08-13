import {theme} from '../core/theme';
import {StyleSheet} from 'react-native';

export const AddStyles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: theme.colors.background,
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    bottom: 0,
    position: 'absolute',
  },
  imageContainer: {
    marginTop: 50,
    backgroundColor: theme.colors.background,
    borderRadius: 50,
    overflow: 'hidden',
    elevation: 2,
  },
  stickyHeaderContainer: {
    backgroundColor: theme.colors.background,
    paddingVertical: 15,
    width: '100%',
  },
  smallBar: {
    height: 4,
    width: 90,
    backgroundColor: theme.colors.bar,
    borderRadius: 50,
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
    paddingLeft: 5,
  },
  text: {
    fontSize: theme.size.large,
    marginVertical: 10,
    color: theme.colors.primary,
    ...theme.fonts.bold,
  },
  errorTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    color: theme.colors.error,
    marginLeft: 20,
    fontSize: theme.size.regular,
    ...theme.fonts.medium,
  },
  resendContainer: {marginTop: 20, alignItems: 'center'},
  resendText: {fontSize: theme.size.regular, ...theme.fonts.medium},
  resendButton: {paddingVertical: 10, paddingHorizontal: 20, elevation: 2},
  resend: {
    fontSize: theme.size.medium,
    color: '#2bc48a',
    ...theme.fonts.medium,
  },
  descriptionContainer: {
    alignItems: 'center',
  },

  description: {
    fontSize: theme.size.medium,
    ...theme.fonts.medium,
  },
  email: {
    fontSize: theme.size.medium,
    textAlign: 'center',
    marginVertical: 5,
    ...theme.fonts.medium,
  },
  note: {
    fontSize: theme.size.small,
    ...theme.fonts.medium,
  },
  imageFromLibraryContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  libImage: {height: 120, width: 120, borderRadius: 30, resizeMode: 'contain'},

  dropDownText: {
    fontSize: theme.size.regular,
    ...theme.fonts.medium,
  },
  dropDownSelectedText: {
    fontSize: theme.size.regular,
    ...theme.fonts.semiBold,
  },
  dropDownContainer: {width: '100%', marginVertical: 12},
});
