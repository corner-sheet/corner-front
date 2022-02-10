import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spacing from '../../utils/Spacing';
import { CustomButton } from './components';

export function EditProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>EditProfileScreen</Text>
            <CustomButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Spacing.spacing.medium,
    },
    title: {
        fontSize: Spacing.fontSize.md,
        fontWeight: Spacing.fontWeight.bold,
        textAlign: 'center',
        marginVertical: Spacing.spacing.medium,
    },
});