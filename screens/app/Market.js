import {View, RefreshControl, ScrollView, Pressable, Image} from 'react-native';
import React from 'react';
//
import {theme} from '../../core/theme';
// Modules
import {Text} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {NavigationRef as navigation} from '../../routes/Route';
// styles
import {MarketStyles as styles} from '../../styles/market';
// Components
import HalfGradientBackground from '../../components/HalfGradient';
// Icons
import MI from 'react-native-vector-icons/MaterialIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../routes/AuthProvider';

export default function Market() {
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const {lang} = React.useContext(AuthContext);
  return (
    <View>
      <HalfGradientBackground />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="always"
        refreshControl={
          <RefreshControl
            colors={[theme.colors.primary]}
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await reload();
              setRefreshing(false);
            }}
          />
        }
        contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 10}}>
        <Text style={styles.title}>
          {lang == 'NP' ? 'मेरो पसल' : 'MY SHOP'}
        </Text>

        <View style={styles.container}>
          <AddButton />
          <View style={{height: 200, width: '100%'}}>
            <LottieView
              autoPlay
              loop
              source={require('../../assets/animations/emptybox.json')}
            />
          </View>
          {/* <MarketItems label={'Capsicum'} /> */}
        </View>
      </ScrollView>
    </View>
  );
}

const MarketItems = ({label, ...props}) => {
  return (
    <View style={styles.rippleContainer}>
      <Pressable
        style={styles.unitContainer}
        android_disableSound={true}
        android_ripple={{color: theme.colors.grey, borderless: true}}
        {...props}
        // onPress={onOpenTest}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/bell-pepper.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.unit_nameContainer}>
          <Text style={styles.unit_name}>{label}</Text>

          <View style={styles.textContainer}>
            <MI name="date-range" size={17} color={theme.colors.primary} />
            {/* <Text style={styles.date}>
              {new Date(test?.['date'].toDate()).toLocaleDateString(undefined, {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </Text> */}
          </View>

          <View style={styles.textContainer}>
            <MI name="attach-money" size={17} color={theme.colors.primary} />
            {/* <Text style={styles.date}>
              {new Date(test?.['date'].toDate()).toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}
            </Text> */}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const AddButton = () => {
  const {lang} = React.useContext(AuthContext);
  return (
    <View
      style={{
        alignSelf: 'flex-start',
      }}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('ADD');
        }}>
        <Ant name="plus" color={theme.colors.primary} size={20} />
        <Text style={styles.text}>
          {' '}
          {lang == 'NP' ? 'तरकारी थप्नुहोस्' : 'Add Veggies'}
        </Text>
      </Pressable>
    </View>
  );
};
