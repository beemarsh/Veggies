import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import React from 'react';

import LottieView from 'lottie-react-native';

import {Text} from 'react-native-paper';
import HalfGradientBackground from '../../components/HalfGradient';
import {AuthContext} from '../../routes/AuthProvider';

import {theme} from '../../core/theme';

import RNFetchBlob from 'rn-fetch-blob';

import {server} from '../../core/server';

export default function DiseaseML({navigation, route}) {
  const {assets} = route?.params;

  const [loading, setLoading] = React.useState(false);

  const [results, setResults] = React.useState(null);

  const {lang} = React.useContext(AuthContext);

  const detectDisease = async () => {
    setLoading(true);
    try {
      const response = await RNFetchBlob.fetch(
        'POST',
        server.url,
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          // element with property `filename` will be transformed into `file` in form data
          {
            name: 'data',
            filename: assets['fileName'],
            type: assets['type'],
            data: RNFetchBlob.wrap(assets['uri']),
            // data: our_data['uri'],
          },
        ],
      );

      const json = await response.json();
      setResults(json);

      console.log(json);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    detectDisease();
  }, []);

  return (
    <View>
      <HalfGradientBackground />
      <Text style={styles.title}>
        {lang == 'NP' ? 'रोग पत्ता लगाउने' : 'Disease Detection'}
      </Text>
      {loading ? (
        <View style={{height: 200, width: '100%', marginTop: 30}}>
          <LottieView
            autoPlay
            loop
            source={require('../../assets/animations/scan.json')}
          />
        </View>
      ) : (
        <View
          style={{
            width: '80%',
            height: 300,
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 25,
            // justifyContent:"center",
            elevation: 2,
          }}>
          <View
            style={{
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: assets['uri']}}
              style={{
                height: 150,
                width: '100%',
                resizeMode: 'cover',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
          </View>

          <View style={{marginTop: 10}}>
            <Text
              style={{fontSize: 20, textAlign: 'center', ...theme.fonts.bold}}>
              {lang == 'NP' ? 'परिणामहरू' : 'Results'}
            </Text>

            <Text
              style={{
                textAlign: 'center',
                fontSize: theme.size.medium,
                ...theme.fonts.semiBold,
              }}>
              Some Result
            </Text>

            <Text style={{fontSize: theme.size.small + 1, textAlign: 'center'}}>
              {lang == 'NP'
                ? 'हाम्रा सुझावहरू एकदमै सही छन्। यद्यपि, तपाईंले पेशेवरहरूको निर्देशन पनि गर्नुपर्छ।'
                : "Our predictions are highly accurate. However, you should also professsionals' guidance."}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: theme.size.large,
    color: theme.colors.white,
    marginVertical: 20,
    ...theme.fonts.bold,
  },
});
