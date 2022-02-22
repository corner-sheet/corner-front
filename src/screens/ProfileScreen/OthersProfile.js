import * as React from 'react';
import { SafeAreaView, useColorScheme, Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import { ProfileBody, ProfileButtons } from './ProfileBody';


export function ProfileScreen() {
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
            <Text style={styles.title}>ProfileScreen</Text>
            <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    padding: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionic name="arrow-back" style={{fontSize: 20, color: 'black'}} />
                    </TouchableOpacity>
                    <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '92%',
                    }}>
                    <Text style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}>
                        {name}
                    </Text>
                    <Feather
                        name="more-vertical"
                        style={{fontSize: 20, color: 'black'}}
                    />
                    </View>
                </View>
            </View>
            <ProfileBody
            name="GoYounJung"
            accountName="goyoujung"
            profileImage={require('../../utils/images/profile.jpg')}
            followers="100"
            following="100"
            post="100"
            />
            <ProfileButtons
            id={1}
            name="GoYounJung"
            accountName="goyoujung"
            profileImage={require('../../utils/images/profile.jpg')}
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
    content: {

    },
});