import React, {Component} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';
// Modules
import {Provider} from 'react-native-paper';
import {theme} from '../core/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from './AuthProvider';
//Screens
import Home from '../screens/app/Home';
import Drawer from '../screens/app/Drawer';
import Market from '../screens/app/Market';
import Notifications from '../screens/app/Notifications';
import Settings from '../screens/app/Settings';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Functions
import {onScanPress} from '../core/modelFn';

// Constants
export const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class AppStack extends Component {
  render() {
    // Show a Loader Until a asynchronous fetch is done

    return (
      <Provider theme={theme}>
        <Stack.Navigator
          initialRouteName={'TAB'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={TabNavigator} name="TAB" />
        </Stack.Navigator>
      </Provider>
    );
  }
}

// The Bottom Tabs are rendered here
const TabNavigator = () => {
  const {loading} = React.useContext(AuthContext);

  const [loadDisplay, setLoadDisplay] = React.useState('none');

  const onLoadingEnd = () => {
    return setTimeout(() => {
      setLoadDisplay('flex');
    }, 1500);
  };

  React.useEffect(() => {
    onLoadingEnd();
  }, [loadDisplay]);
  return (
    <Tab.Navigator
      initialRouteName="SETTINGS"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: '#4f6365',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          paddingVertical: 5,
          elevation: 1,
          display: loading ? 'none' : loadDisplay,
          bottom: 10,
          // position: 'absolute',
          // left: 20,
          // right: 20,
          borderRadius: 15,
          height: 65,
          width:"90%",alignSelf:"center"
        },
        tabBarItemStyle: {
          marginBottom: 10,
        },
      }}>
      <Tab.Screen
        component={Home}
        name="HOME"
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={Drawer}
        name="DRAWER"
        options={{
          tabBarIcon: ({color, size}) => (
            <MCIcons name="fruit-cherries" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={Market}
        name="MARKET"
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicon name="ios-scan-outline" color={color} size={size} />
          ),
          tabBarButton: props => <CustomButton {...props} />,
        }}
      />
      <Tab.Screen
        component={Notifications}
        name="NOTIFICATIONS"
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicon name="md-notifications-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={Settings}
        name="SETTINGS"
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicon name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CustomButton = ({children, onPress}) => (
  <Pressable
    onPress={onScanPress}
    style={{top: -30, justifyContent: 'center', alignItems: 'center'}}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: theme.colors.background,
        // elevation: 1,
        ...styles.shadow,
      }}>
      {children}
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
