import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Touchable,
} from 'react-native';
import React from 'react';
//   Modules
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../core/theme';
import {AuthContext} from '../../routes/AuthProvider';
import db from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
// Icons
import AntIcons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
//   Components

//   Styles
import {SettingsStyles as styles} from '../../styles/settings';

export default function Settings({navigation}) {
  const [fetchedUser, setFetchedUser] = React.useState(null);
  const [isRefreshing, setRefreshing] = React.useState(false);
  const [isVerifiedAccount, setVerifiedAccount] = React.useState(false);
  const {setLoading, lang, setLang} = React.useContext(AuthContext);

  const logout = async () => {
    try {
      setLoading(true);
      await auth().signOut();
    } catch (error) {
      if (__DEV__) console.log(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.profileScreenContainer}
      showsVerticalScrollIndicator={false}>
      {/* Edit Profile Header Button */}
      <View style={styles.editButtonContainer}>
        {/*  */}
        {/* Edit Profile Buttton */}
        <TouchableOpacity
          onPress={() => {
            if (lang == 'NP') setLang('EN');
            else setLang('NP');
          }}>
          <Text> {lang == 'NP' ? 'ने' : 'EN'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.editButton}
          onPress={() => {
            // navigation.navigate('EDIT_ACCOUNT', {userInfo: fetchedUser})
          }}
          touchSoundDisabled={true}>
          <Text style={styles.editButtonText}>
            {lang == 'NP' ? 'खाता सम्पादन गर्नुहोस्' : 'Edit Account'}
          </Text>
          <Icon
            name="account-edit-outline"
            size={theme.size.extraMedium}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>

      {/*  */}
      <View style={styles.profileImageAndNameContainer}>
        {/* Profile Image and Username here */}
        <View style={styles.profileImageContainer}>
          {/* Profile Image Goes here */}
          <Image
            source={
              fetchedUser?.['photoURL']
                ? {uri: fetchedUser?.['photoURL']}
                : require('../../assets/icons/user.png')
            }
            style={styles.profileImage}
          />
        </View>

        <View style={styles.userNameContainer}>
          {/* UserName is Here */}
          <Text style={styles.userNameText}>
            {fetchedUser?.['displayName']
              ? fetchedUser['displayName']
              : lang == 'NP'
              ? 'नाम छैन'
              : 'no_username'}
          </Text>

          {/* User is Verfied or Unverified Text */}
          <View style={styles.verificationContainer}>
            <Octicons
              name={isVerifiedAccount ? 'verified' : 'unverified'}
              color={
                isVerifiedAccount ? theme.colors.primary : theme.colors.error
              }
              size={theme.size.extraMedium}
            />
            <Text
              style={isVerifiedAccount ? styles.verified : styles.unverified}>
              {isVerifiedAccount
                ? lang == 'NP'
                  ? 'प्रमाणित खाता'
                  : 'Verified Account'
                : lang == 'NP'
                ? 'अप्रमाणित खाता'
                : 'Unverified Account'}
            </Text>
          </View>
        </View>
        {/*  */}
      </View>

      {/* details */}

      <View style={styles.detailsContainer}>
        {/*  */}
        <View style={styles.details}>
          {/* Phone Number */}
          <Ionicons
            name="phone-portrait-outline"
            size={theme.size.extraMedium}
            color={theme.colors.primary}
            style={styles.detailsIcon}
          />
          <Text style={styles.detailsText}>
            {fetchedUser?.['phoneNumber']
              ? fetchedUser['phoneNumber']
              : lang == 'NP'
              ? 'छैन'
              : 'N A'}
          </Text>
        </View>
        {/* Email */}
        <View style={styles.details}>
          <AntIcons
            name="mail"
            size={theme.size.extraMedium}
            color={theme.colors.primary}
          />
          <Text style={styles.detailsText}>
            {fetchedUser?.['email']
              ? fetchedUser?.['email']
              : lang == 'NP'
              ? 'छैन'
              : 'N A'}
          </Text>
        </View>

        {/* Address */}

        <View style={styles.details}>
          <Ionicons
            name="md-location-outline"
            size={theme.size.extraMedium}
            color={theme.colors.primary}
          />
          <Text style={styles.detailsText}>
            {fetchedUser?.['address']
              ? fetchedUser['address']
              : lang == 'NP'
              ? 'छैन'
              : 'N A'}
          </Text>
        </View>

        {/* Change Password */}

        <FunctionalProfileButtons
          title={
            lang == 'NP' ? 'पासवर्ड परिवर्तन गर्नुहोस्' : 'Change Password'
          }
          icon="lock"
          onPress={() => {
            // navigation.navigate('PASSWORD_CHANGE');
          }}
        />
        {/* Verifiy Account if not verified */}
        {isVerifiedAccount ? null : (
          <>
            <FunctionalProfileButtons
              title={
                lang == 'NP' ? 'खाता प्रमाणित गर्नुहोस्' : 'Verify Account'
              }
              icon="key"
              onPress={() => {
                // navigation.navigate('VERIFY');
              }}
            />
          </>
        )}

        {/* Logout */}

        <FunctionalProfileButtons
          title={lang == 'NP' ? 'बाहिर निस्कनु' : 'Logout'}
          icon="logout"
          isLogout={true}
          onPress={() => {
            logout();
          }}
        />
      </View>
    </ScrollView>
  );
}

const FunctionalProfileButtons = ({title, icon, isLogout, ...props}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{...styles.details, ...styles.functionalButtons}}>
      <AntIcons
        name={icon}
        size={theme.size.extraMedium}
        color={isLogout ? theme.colors.error : theme.colors.primary}
      />
      <Text
        style={{
          ...styles.functionalButtonsText,
          color: isLogout ? theme.colors.error : theme.colors.primary,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
