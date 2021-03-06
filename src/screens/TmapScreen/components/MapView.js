import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Platform, PermissionsAndroid, StyleSheet, View } from 'react-native';
import NaverMapView, { Marker } from "react-native-nmap";
import { reverseGeocode } from '../../../reducers';
import Geolocation from 'react-native-geolocation-service';

export const MapView = ({ navigation, search }) => {
  const { current } = search;
  const { latitude, longitude } = current;
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === "android" && !(hasAndroidPermission())) {
      return;
    }
    else {
      Geolocation.getCurrentPosition(
        (position) => {
          dispatch(reverseGeocode({ latitude: position.coords.latitude, longitude: position.coords.longitude }));
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }, []);

  return (
    <NaverMapView
      style={{ flex: 2 }}
      showsMyLocationButton={true}
      useTextureView
      center={{ ...{ latitude, longitude }, zoom: 16 }}
      onMapClick={(e) => {
        dispatch(reverseGeocode({ latitude: e.latitude, longitude: e.longitude }));
      }}>
      <Marker
        coordinate={{ latitude, longitude }}
        caption={{
          text: current?.roadAddress,
        }}
        image={{
          uri: 'https://i.ibb.co/K54Q6xR/marker1.png'
        }}
        width={50}
        height={50}
        pinColor='black'
      />
      <Marker
        coordinate={{ latitude: DATA[0].latitude, longitude: DATA[0].longitude }}
        caption={{
          text: DATA[0].roadAddress,
        }}
        image={{
          uri: 'https://i.ibb.co/J71Mcc1/Group-8.png'
        }}
        width={50}
        height={50}
        pinColor='black'
      />
      <Marker
        coordinate={{ latitude: DATA[1].latitude, longitude: DATA[1].longitude }}
        caption={{
          text: DATA[1].roadAddress,
        }}
        image={{
          uri: 'https://i.ibb.co/J71Mcc1/Group-8.png'
        }}
        width={50}
        height={50}
        pinColor='black'
      />
      <Marker
        coordinate={{ latitude: DATA[2].latitude, longitude: DATA[2].longitude }}
        caption={{
          text: DATA[2].roadAddress,
        }}
        image={{
          uri: 'https://i.ibb.co/J71Mcc1/Group-8.png'
        }}
        width={50}
        height={50}
        pinColor='black'
      />
    </NaverMapView>
  );
};


const DATA = [
  {
    longitude: 126.8933799,
    latitude: 37.409299,
    roadAddress: '??????????????? ???????????? ??????????????? 55??? 3',
    alias: '??????',
  },
  {
    longitude: 126.9033809,
    latitude: 37.459298,
    roadAddress: '??????????????? ???????????? ????????????64??? 26 ??????????????????',
    alias: '??????',
  },
  {
    longitude: 126.8233813,
    latitude: 37.4292989,
    roadAddress: '??????????????? ???????????? ????????????79??? 46',
    alias: '???',
  },

]
async function hasAndroidPermission() {
  const finePermission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
  const coarsePermission = PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION

  const hasPermission = await PermissionsAndroid.check(finePermission) && await PermissionsAndroid.check(coarsePermission);
  if (hasPermission) {
    return true;
  }
  console.log('finePermission', finePermission);
  console.log('coarsePermission', coarsePermission);

  const status = await PermissionsAndroid.requestMultiple([finePermission, coarsePermission]);
  return status === 'granted';
}