import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, useColorScheme } from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import { CustomButton } from './components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function HomeScreen(props) {
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
            <Text style={styles.title}>HomeScreen</Text>
            <TouchableOpacity
                onPress={() => { props.navigation.navigate('Publish') }}
            >
                <Text>
                    Go to PublishScreen
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { props.navigation.navigate('Search') }}
            >
                <Text>
                    Go to SearchScreen
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: Spacing.fontSize.md,
        fontWeight: Spacing.fontWeight.bold,
        textAlign: 'center',
        marginVertical: Spacing.spacing.medium,
    },
});