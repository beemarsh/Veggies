import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
// Modules
import {Text} from 'react-native-paper';
// Components
// import Header from '../components/Header';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
// import BackButton from '../components/BackButton';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../core/validators';
import {AuthContext} from '../../routes/AuthProvider';

// Styles
import {LoginStyles as styles} from '../../styles/login';
// import SwitchMode from '../components/switchMode';
import {NavigationRef as navigation} from '../../routes/Route';

export default function RegisterScreen() {
  const {register, whichProcessIsHappenningNow, mode} =
    React.useContext(AuthContext);
  const [name, setName] = React.useState({value: 'Ronoroa Zoro', error: ''});
  const [email, setEmail] = React.useState({
    value: 'anup8eguy@gmail.com',
    error: '',
  });
  const [password, setPassword] = React.useState({
    value: 'Bhusal12',
    error: '',
  });

  const onSignUpPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const nameError = nameValidator(name.value);

    if (emailError || passwordError || nameError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      setName({...name, error: nameError});
      return;
    }

    register(name.value, email.value, password.value);
  };

  return (
    <ScrollView
      style={styles.background}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Logo />

      <Text style={styles.title}>VEGGIES</Text>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
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
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{marginTop: 24}}
        disabled={whichProcessIsHappenningNow == 'REGISTER-EMAIL'}
        loading={whichProcessIsHappenningNow == 'REGISTER-EMAIL'}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text style={styles.instead}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LOGIN')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
