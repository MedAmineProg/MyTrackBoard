// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import Screens
import HomeScreen from '../screens/DrawerScreens/HomeScreen';
import SettingsScreen from '../screens/DrawerScreens/SettingsScreen';
import CustomSidebarMenu from '../screens/components/CustomSidebarMenu';
import NavigationDrawerHeader from '../screens/components/NavigationDrawerHeader';
import ProfileScreen from '../screens/DrawerScreens/ProfileScreen';
import RequestScreen from '../screens/RequestScreen';
import DocumentScreen from '../screens/DocumentScreen';
import MessageScreen from '../screens/MessageScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const RequestScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="RequestScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{
          title: 'Requests', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
};
const DocumentScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="DocumentScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="DocumentScreen"
        component={DocumentScreen}
        options={{
          title: 'Document', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const MessageScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="MessageScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: 'Message', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="RequestScreenStack"
        options={{drawerLabel: 'Request Screen'}}
        component={RequestScreenStack}
      />
            <Drawer.Screen
        name="DocumentScreenStack"
        options={{drawerLabel: 'Document Screen'}}
        component={DocumentScreenStack}
      />
            <Drawer.Screen
        name="MessageScreenStack"
        options={{drawerLabel: 'Message Screen'}}
        component={MessageScreenStack}
      />
            <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={SettingScreenStack}
      />
            <Drawer.Screen
        name="ProfileScreenStack"
        options={{drawerLabel: 'Profile Screen'}}
        component={ProfileScreenStack}
      />

    </Drawer.Navigator>
    
  );
};

export default DrawerNavigatorRoutes;