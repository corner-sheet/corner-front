import React from 'react';
import Colors from '../../../utils/Colors';
import { removeRecentSearch } from '../../../reducers';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VStack, Text, HStack } from 'native-base';
import { useDispatch } from 'react-redux';
import NaverMapView, { Marker } from 'react-native-nmap';

export const Map = ({ navigation, search }) => {
    const recentSearch = search.recent;
    const { longitude, latitude, roadAddress } = search.current;
    const dispatch = useDispatch();
    return (
        <VStack space={2}>
            <TouchableOpacity onPress={() => navigation.navigate('MapView')}>
                <HStack space={1}>
                    <Ionicons name='locate-outline' size={18} color='black' />
                    {roadAddress
                        ? <Text fontSize="sm">{roadAddress}</Text>
                        : <Text fontSize="sm">지도에서 찾아보기</Text>
                    }
                    <Ionicons name='chevron-forward-outline' size={16} color={Colors.grey} />
                </HStack>
            </TouchableOpacity>
            <NaverMapView
                style={styles.map}
                showsMyLocationButton={false}
                center={{ ...{ latitude: search.current.latitude, longitude: search.current.longitude }, zoom: 16 }}
                onTouch={() => navigation.navigate('MapView')}
                onMapClick={() => navigation.navigate('MapView')}>
                <Marker coordinate={{ latitude, longitude }} pinColor="red" />
            </NaverMapView>
            <VStack space={2}>
                <Text fontSize="xs">최근</Text>
                {recentSearch.length === 0 ?
                    <Text fontSize="sm">검색 기록이 없습니다.</Text>
                    :
                    recentSearch.map((item, index) => (
                        <HStack space={1}>
                            <Ionicons name='location-sharp' size={14} color='black' />
                            <Text fontSize="sm">{item.roadAddress}</Text>
                            <TouchableOpacity onPress={() => dispatch(removeRecentSearch(index))}>
                                <Ionicons name='close' size={14} color='black' />
                            </TouchableOpacity>
                        </HStack>
                    ))}
            </VStack>
        </VStack >
    );
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        alignSelf: 'center',
        height: 120,
    },
});