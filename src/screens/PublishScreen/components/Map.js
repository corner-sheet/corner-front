import React, { useState } from 'react';
import Spacing from '../../../utils/Spacing';
import Colors from '../../../utils/Colors';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NaverMapView from "react-native-nmap";

function MyMap(navigation) {
    const P0 = { latitude: 37.564362, longitude: 126.977011 };
    return (
        <NaverMapView style={{ width: '100%', height: '100%' }}
            showsMyLocationButton={false}
            center={{ ...P0, zoom: 10 }}
            onTouch={() => navigation.navigate('MapView')}
            onMapClick={() => navigation.navigate('MapView')}>
        </NaverMapView>
    );
}

export const Map = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {FindFromMap(navigation)}
            <View style={styles.item}>
                {MyMap(navigation)}
            </View>
            <RecentSearch />
        </View>
    );
};

function FindFromMap(navigation) {
    return (
        <TouchableOpacity style={styles.row}
            onPress={() => navigation.navigate('MapView')}>
            <View style={styles.iconWithText}>
                <Ionicons name='locate-outline' size={18} color='black' />
                <Text style={styles.mapText}>지도에서 찾아보기</Text>
            </View>
            <Ionicons name='chevron-forward-outline' size={16} color={Colors.grey} />
        </TouchableOpacity>
    );
}

const RecentSearch = () => {
    const [recentSearch, setRecentSearch] = useState(
        ['서울특별시 용산구 이태원동 210-65', '서울시 종로구 종로', '부산광역시 남구']
    );

    function removeRecentSearch(index) {
        const newRecentSearch = [...recentSearch];
        newRecentSearch.splice(index, 1);
        setRecentSearch(newRecentSearch);
    }

    return (
        <>
            <Text style={styles.recentSearchText}>최근</Text>
            {recentSearch.length === 0 ?
                <Text style={styles.recentSearchItemText}>최근 검색어가 없습니다.</Text>
                :
                recentSearch.map((item, index) => (
                    <View style={styles.row}>
                        <View style={styles.iconWithText} key={index}>
                            <Ionicons name='location-sharp' size={14} color='black' />
                            <Text style={styles.recentSearchItemText}>{item}</Text>
                        </View>
                        <TouchableOpacity onPress={() => removeRecentSearch(index)}>
                            <Ionicons name='close' size={14} color='black' />
                        </TouchableOpacity>
                    </View>
                ))}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: Spacing.spacing.sm,
        marginTop: Spacing.spacing.sm,
        marginBottom: Spacing.spacing.xs,
        marginLeft: Spacing.spacing.md,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: Spacing.spacing.md,
        marginBottom: Spacing.spacing.sm,
    },
    iconWithText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mapText: {
        fontSize: Spacing.fontSize.sm,
        fontWeight: Spacing.fontWeight.medium,
        color: Colors.articleText,
    },
    recentSearchText: {
        fontSize: Spacing.fontSize.xs,
        fontWeight: Spacing.fontWeight.light,
        color: Colors.grey,
        marginBottom: Spacing.spacing.sm,
    },
    recentSearchItemText: {
        fontSize: Spacing.fontSize.sm,
        fontWeight: Spacing.fontWeight.light,
        color: Colors.articleText,
    },
    item: {
        width: '100%',
        height: 100,
        marginBottom: Spacing.spacing.md,
    },
});