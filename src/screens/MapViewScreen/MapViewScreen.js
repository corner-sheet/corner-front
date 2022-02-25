import * as React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import { MapView } from './components';

export function MapViewScreen(props) {
    const isDarkMode = useColorScheme() === 'dark';
    const containerStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Spacing.spacing.medium,
        backgroundColor: isDarkMode ? Colors.modes.dark.background : Colors.background,
    };
    const search = useSelector(state => state.search);
    return (
        <SafeAreaView style={containerStyle}>
            <MapView search={search} navigation={props.navigation} />
        </SafeAreaView>
    );
}