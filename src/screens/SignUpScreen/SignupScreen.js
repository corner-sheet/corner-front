import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, useColorScheme } from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import { CustomButton } from './components';

export function SignUpScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const containerStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Spacing.spacing.medium,
        backgroundColor: isDarkMode ? Colors.modes.dark.background : Colors.background,
    };
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [check_num, onChangeCheckNumber] = React.useState(null);

    return (
        <SafeAreaView style={containerStyle}>
            <Text style={styles.title}>SignUpScreen</Text>
            <CustomButton />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="새 이메일"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="새 비밀번호"
                keyboardType="numeric"
                secureTextEntry="true"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeCheckNumber}
                value={check_num}
                placeholder="새 비밀번호 확인"
                keyboardType="numeric"
                secureTextEntry="true"
            />
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