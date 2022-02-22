import React, { useState } from 'react';
import Spacing from '../../../utils/Spacing';
import Colors from '../../../utils/Colors';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NaverMapView, { Marker } from "react-native-nmap";
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

function MyMap() {
    const P0 = { latitude: 37.564362, longitude: 126.977011 };
    const P1 = { latitude: 37.565051, longitude: 126.978567 };
    const P2 = { latitude: 37.565383, longitude: 126.976292 };
    return (
        <NaverMapView style={{ width: '100%', height: '100%' }}
            showsMyLocationButton={true}
            center={{ ...P0, zoom: 16 }}
            onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
            onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
            onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
            <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')} />
        </NaverMapView>
    );
}

export const MapView = ({ navigation }) => {
    const [text, setText] = useState('');
    return (
        <View style={styles.item}>
            <View style={styles.row}>
                <View style={styles.iconWithText}>
                    <Ionicons name='search-sharp' size={18} color='black' />
                    <TextInput
                        placeholder='장소를 검색하세요'
                        onChangeText={text => setText(text)}
                        value={text}
                        style={styles.textInput}
                    />
                </View>
            </View>
            <KeyboardAvoidingView style={styles.map}>
                {MyMap(navigation)}
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: Dimensions.get('window').height * 0.8,
    },
    searchText: {
        fontSize: 20,
        color: 'black',
    },
    map: {
        width: '100%',
        height: '90%',
        zIndex: -1,
    },
    row: {
        marginHorizontal: Spacing.spacing.md,
        height: '10%',
        backgroundColor: Colors.background,
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 1,
    },
    iconWithText: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.grey,
        paddingHorizontal: Spacing.spacing.sm,
    },
    textInput: {
        fontSize: Spacing.fontSize.md,
        color: Colors.articleText,
    },
});