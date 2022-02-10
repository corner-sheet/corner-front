import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../utils/Colors';
import { IntroScreen } from '../screens/IntroScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SelectFavoriteMoodScreen } from '../screens/SelectFavoriteMoodScreen';
import { LikeScreen } from '../screens/LikeScreen';
import { PostScreen } from '../screens/PostScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { MapViewScreen } from '../screens/MapViewScreen';
import { PublishScreen } from '../screens/PublishScreen';
import { TmapScreen } from '../screens/TmapScreen';
import { ProfileScreen, EditProfileScreen } from '../screens/ProfileScreen';


const IntroStack = createStackNavigator();
export const IntroStackScreen = () => (
  <IntroStack.Navigator>
    <IntroStack.Screen
      name='Intro'
      component={IntroScreen}
      options={{ headerShown: false }}
    />
  </IntroStack.Navigator>
);

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name='Login' component={LoginScreen} />
    <AuthStack.Screen name='SelectFavoriteMood' component={SelectFavoriteMoodScreen} />
  </AuthStack.Navigator>
);

const TmapStack = createStackNavigator();
export const TmapStackScreen = () => (
  <TmapStack.Navigator>
    <TmapStack.Screen
      name='Tmap'
      component={TmapScreen}
      options={{ headerShown: false }}
    />
    <TmapStack.Screen name='Post' component={PostStackScreen} />
  </TmapStack.Navigator>
);

const LikeStack = createStackNavigator();
export const LikeStackScreen = () => (
  <LikeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <LikeStack.Screen name='Like' component={LikeScreen} />
    <LikeStack.Screen name='Detail' component={DetailScreen} />
    <LikeStack.Screen name='MapView' component={MapViewScreen} />
  </LikeStack.Navigator>
);

const SearchStack = createStackNavigator();
export const SearchStackScreen = () => (
  <SearchStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <SearchStack.Screen name='Search' component={SearchScreen} />
    <SearchStack.Screen name='Detail' component={DetailScreen} />
    <SearchStack.Screen name='MapView' component={MapViewScreen} />
  </SearchStack.Navigator>
);

const PostStack = createStackNavigator();
export const PostStackScreen = () => (
  <PostStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <PostStack.Screen name='PostScreen' component={PostScreen} />
    <PostStack.Screen name='DetailScreen' component={DetailScreen} />
    <PostStack.Screen name='MapViewScreen' component={MapViewScreen} />
    <PostStack.Screen name='PublishScreen' component={PublishScreen} />
  </PostStack.Navigator>
);

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      cardOverlayEnabled: true,
      presentation: 'modal',
    }}
  >
    <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen} />
    <ProfileStack.Screen name='ProfileEdit' component={EditProfileScreen} />
  </ProfileStack.Navigator>
);

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
    />
    <HomeStack.Screen name='Detail' component={DetailScreen} />
    <HomeStack.Screen name='MapView' component={MapViewScreen} />
    <HomeStack.Screen name='Search' component={SearchScreen} />
    <HomeStack.Screen name='Post' component={PostStackScreen} />
  </HomeStack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
  const likes = useSelector((state) => state.like.likedItems);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let size = 26;
          const color = focused ? Colors.accent : Colors.grey;
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'Like') {
            iconName = 'heart';
          } else if (route.name === 'Search') {
            iconName = 'magnify';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          } else if (route.name === 'Tmap') {
            iconName = 'map-marker';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      barStyle={{
        backgroundColor: Colors.background,
        height: 50,
        justifyContent: 'center',
      }}
      activeColor={Colors.accent}
      inactiveColor={Colors.grey}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'HOME',
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={() => ({
          tabBarLabel: 'SEARCH',
        })}
      />
      <Tab.Screen
        name='Tmap'
        component={TmapStackScreen}
        options={() => ({
          tabBarLabel: false,

        })}
      />
      <Tab.Screen
        name='Like'
        component={LikeStackScreen}
        options={() => ({
          tabBarLabel: 'LIKE',
          tabBarBadge: likes?.items?.length === 0 ? null : likes?.items?.length,
        })}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileStackScreen}
        options={() => ({
          tabBarLabel: 'MY PAGE',
        })}
      />
    </Tab.Navigator>
  );
};


