import {theme} from '../core/theme';
import {StyleSheet} from 'react-native';

import {width} from '../core/dimensions';

export const SettingsStyles = StyleSheet.create({
  profileScreenContainer: {
    alignItems: 'center',
    padding: 20,
  },
  editButtonContainer: {
    padding: 5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: theme.size.small,
    marginRight: 5,
    color: theme.colors.primary,
    ...theme.fonts.medium,
  },
  profileImageAndNameContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: width == 'big' ? 125 : 100,
    height: width == 'big' ? 125 : 100,
    borderRadius: width == 'big' ? 50 : 40,
    overflow: 'hidden',
  },
  profileImage: {
    width: width == 'big' ? 125 : 100,
    height: width == 'big' ? 125 : 100,
    resizeMode: 'cover',
  },
  userNameContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginLeft: 5,
  },
  userNameText: {
    fontSize: width == 'big' ? theme.size.large : theme.size.extraMedium,
    color: theme.colors.primary,
    // ...theme.fonts.bold
  },
  verificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  verified: {
    color: theme.colors.primary,
    marginLeft: 5,
    fontSize: theme.size.regular,
    ...theme.fonts.medium,
  },
  unverified: {
    color: theme.colors.error,
    marginLeft: 5,
    fontSize: theme.size.regular,
    ...theme.fonts.medium,
  },

  detailsContainer: {paddingVertical: 20, width: '100%'},
  details: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailsIcon: {},
  detailsText: {
    marginLeft: 20,
    fontSize: theme.size.regular,
    color: theme.colors.primary,
    paddingVertical: 5,
    ...theme.fonts.medium,
  },
  divider: {width: '100%', height: 1, backgroundColor: '#bbb'},
  functionalButtons: {
    width: '100%',
    paddingVertical: 15,
  },
  functionalButtonsText: {
    fontSize: theme.size.regular,
    marginLeft: 20,
    ...theme.fonts.medium,
  },
  note: {
    width: '100%',
    paddingHorizontal: 10,
    color: theme.colors.primary,
    fontSize: theme.fonts.small,
    ...theme.fonts.medium,
  },
});
