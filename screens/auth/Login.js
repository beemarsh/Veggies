import {View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
// Modules
import auth from '@react-native-firebase/auth';
import {Text} from 'react-native-paper';
// Other Functions
import {emailValidator, passwordValidator} from '../../core/validators';
// Templates
import AppLoading from '../AppLoading';
import {AuthContext} from '../../routes/AuthProvider';
// Components
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {NavigationRef as navigation} from '../../routes/Route';
// Styles
import {LoginStyles as styles} from '../../styles/login';


function LoginTemplate() {
  const {setSnackMessage} = React.useContext(AuthContext);

  const [email, setEmail] = React.useState({
    value: '',
    error: '',
  });
  const [password, setPassword] = React.useState({
    value: '',
    error: '',
  });

  const [process, setProcess] = React.useState(null);

  const onLoginPressed = () => {
    // Just Validators for LOGIN
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    // Now do the login
    login(email.value, password.value);
  };

  // Authentication Functions

  const login = async (e, p) => {
    setProcess('LOGIN');
    try {
      const {user} = await auth().signInWithEmailAndPassword(e, p);

      await installToken({uid: user.uid});
      // Successful Login
    } catch (error) {
      if (__DEV__) console.log(error);
      setSnackMessage({
        e: true,
        v: true,
        m: error?.code ? getMessageFromCode(error.code) : `Couldn't Login`,
      });
      setProcess(null);
    }
  };

  return (
    <ScrollView
      //  resizeMode="repeat"
      style={styles.background}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Logo style={{marginTop: 10, marginBottom: 20}} />

      <Text style={styles.title}>VEGGIES</Text>

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

      {/* Password here */}
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={password.error}
        errorText={password.error}
        secureTextEntry
      />

      {/* Forgot Password Here */}
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('FORGOT_SCREEN')}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button Here */}
      <Button
        mode="contained"
        onPress={onLoginPressed}
        disabled={process == 'LOGIN'}
        loading={process == 'LOGIN'}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.instead}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('REGISTER')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default function Login() {
  const {loading} = React.useContext(AuthContext);
  return <AppLoading screen={<LoginTemplate />} start={loading} />;
}
