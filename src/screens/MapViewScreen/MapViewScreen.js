import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, useColorScheme } from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import { MapView } from './components';

export function MapViewScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const containerStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Spacing.spacing.medium,
        backgroundColor: isDarkMode ? Colors.modes.dark.background : Colors.background,
    };
    return (
        <SafeAreaView style={containerStyle}>
            <MapView />
        </SafeAreaView>
    );
}