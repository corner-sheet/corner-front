import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dimensions, StyleSheet, View } from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import NaverMapView, { Marker } from "react-native-nmap";
import { HStack, Button, Box, Badge } from "native-base";
import { geocode, reverseGeocode } from '../../../reducers';

export const MapView = ({ navigation, search }) => {
  const { current, recent } = search;
  const { longitude, latitude } = current;
  const dispatch = useDispatch();
  const [isModal, setModal] = useState(false);

  function MyMap() {
    return (
      <NaverMapView style={{ width: '100%', height: '100%' }}
        showsMyLocationButton={false}
        center={{ ...{ latitude, longitude }, zoom: 16 }}
        onMapClick={(e) => {
          dispatch(reverseGeocode({ latitude: e.latitude, longitude: e.longitude }));
        }}>
        <Marker coordinate={{ latitude, longitude }} pinColor="red" />
      </NaverMapView>
    );
  }

  return (
    <View style={styles.item}>
      <Box alignItems="center">
        <Badge>{current.roadAddress}</Badge>
        {isModal ?
          <HStack>
            <Button onPress={() => setModal(!isModal)}>지도로 검색하기</Button></HStack>
          :
          <HStack>
            <Button onPress={() => setModal(!isModal)}>도로명주소로 검색하기</Button></HStack>
        }
      </Box>
      {isModal &&
        <Postcode
          style={{ width: '100%', height: '100%' }}
          onSelected={(data) => {
            geocode(data.address);
            setModal(false);
          }}
        />
      }
      <View style={styles.map}>
        {MyMap(navigation)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: Dimensions.get('window').height * 0.8,
  },
  map: {
    width: '100%',
    height: '90%',
    zIndex: -1,
  }
});