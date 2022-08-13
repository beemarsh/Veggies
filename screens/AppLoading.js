import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';

import MaskedView from '@react-native-community/masked-view';

import {theme} from '../core/theme';
import {AuthContext} from '../routes/AuthProvider';

import {AppLoadingStyles as styles} from '../styles/AppLoading';

export default class AppLoading extends React.Component {
  state = {
    loadingProgress: new Animated.Value(0),
    animationDone: false,
  };

  startAnimation = () => {
    Animated.timing(this.state.loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 500,
    }).start(() => {
      this.setState({animationDone: true});
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.start !== this.props.start) {
      this.startAnimation();
    }
  }

  render() {
    const colorLayer = this.state.animationDone ? null : (
      <View
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: theme.colors.primary},
        ]}
      />
    );

    const whiteLayer = this.state.animationDone ? null : (
      <View
        style={[StyleSheet.absoluteFill, {backgroundColor: theme.colors.white}]}
      />
    );

    const imageScale = {
      transform: [
        {
          scale: this.state.loadingProgress.interpolate({
            inputRange: [0, 15, 100],
            outputRange: [0.1, 0.06, 16],
          }),
        },
      ],
    };

    const opacity = {
      opacity: this.state.loadingProgress.interpolate({
        inputRange: [0, 25, 50],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp',
      }),
    };

    return (
      <View style={{flex: 1, width: '100%', height: '100%'}}>
        {colorLayer}
        <MaskedView
          style={{flex: 1}}
          maskElement={
            <View style={styles.centered}>
              <Animated.Image
                source={require('../assets/images/logo_veggies.png')}
                style={[{width: '100%'}, imageScale]}
                resizeMode="contain"
              />
            </View>
          }>
          {whiteLayer}
          <Animated.View style={[opacity]}>{this.props.screen}</Animated.View>
        </MaskedView>
      </View>
    );
  }
}
