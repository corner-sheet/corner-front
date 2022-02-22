import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './SupportNavigator';
import {TabNavigator, IntroStackScreen} from './RootNavigator';
//Deep Link
import {Linking} from 'react-native';
import {urlRedirect} from '../utils/Tools';
import {HomeStackScreen} from './RootNavigator';

export const AppNavigator = () => {
  const isFirstOpen = useSelector(state => state.post.isFirstOpen);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  useEffect(() => {
    Linking.addEventListener(
      'url',
      event => {
        urlRedirect(event.url);
      },
      [urlRedirect],
    );
    Linking.getInitialURL().then(urlRedirect);
  }, [urlRedirect]);

  useEffect(() => {
    const isFirstTime = async () => {
      const firstOpen = await AsyncStorage.getItem('isFirstTime');
    };
    isFirstTime();
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {isLoggedIn && <AuthStackScreen />} */}
      <TabNavigator />
    </NavigationContainer>
  );
};
