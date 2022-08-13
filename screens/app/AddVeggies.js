import {View, ScrollView, Image} from 'react-native';
import React from 'react';
// Components
import HalfGradientBackground from '../../components/HalfGradient';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import {launchImageLibrary} from 'react-native-image-picker';

//
import {AddStyles as styles} from '../../styles/add';

//
import {Text} from 'react-native-paper';

import {showMessage} from 'react-native-flash-message';
import {theme} from '../../core/theme';
import {AuthContext} from '../../routes/AuthProvider';

export default function AddVeggies() {
  const {lang} = React.useContext(AuthContext);
  const [name, setName] = React.useState({value: '', error: ''});
  const [password, setPassword] = React.useState({
    value: '',
    error: '',
  });
  const [email, setEmail] = React.useState({
    value: '',
    error: '',
  });
  const [phone, setPhone] = React.useState({value: '', error: ''});
  const [PP, setPP] = React.useState(null);
  const [account, setAccount] = React.useState(null);
  const [address, setAddress] = React.useState({
    value: '',
    error: '',
  });

  const showError = m => {
    showMessage({
      message: m,
      type: 'info',
      backgroundColor: theme.colors.black,
    });
  };

  const getImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });

      if (result.didCancel) throw 'User cancelled the process';
      if (result.errorCode || result.errorMessage) throw result.errorMessage;

      setPP(result['assets'][0]);
    } catch (e) {
      showError(e);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 10}}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {lang == 'NP' ? 'थप्नुहोस्' : 'Add Veggies'}
        </Text>

        <View style={styles.imageFromLibraryContainer}>
          <Image
            source={
              PP?.['uri']
                ? {uri: PP?.['uri']}
                : require('../../assets/icons/cabbage.png')
            }
            style={styles.libImage}
          />
        </View>

        {/* Select Images */}
        <Button
          // disabled={whichProcessIsHappeningNow == 'UPLOAD_MENU'}
          onPress={getImage}
          mode="contained">
          {lang == 'NP' ? 'ग्यालेरी खोल्नुहोस्' : 'Open Gallery'}
        </Button>

        <TextInput
          label={lang == 'NP' ? 'तरकारीको नाम' : 'Name of Vegetable'}
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
          error={name.error}
          errorText={name.error}
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="username"
          keyboardType="default"
        />

        <TextInput
          label={lang == 'NP' ? 'मात्रा किलोमा' : 'Quantity in kilograms'}
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          label={lang == 'NP' ? 'तरकारीको मूल्य' : 'Price'}
          returnKeyType="next"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={password.error}
          errorText={password.error}
          secureTextEntry={true}
        />

        <Button
          disabled={process == 'CREATE'}
          loading={process == 'CREATE'}
          mode="contained"
          //   onPress={create}
        >
          {lang == 'NP' ? 'पेश गर्नुहोस्' : 'submit'}
        </Button>
      </View>
    </ScrollView>
  );
}
