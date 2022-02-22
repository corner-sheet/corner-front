import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    useColorScheme,
} from 'react-native';
import { SectionHeader, Comment, PhotoList, Map } from './components';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';

export function PublishScreen(props) {
    const isDarkMode = useColorScheme() === 'dark';
    const containerStyle = {
        flex: 1,
        marginHorizontal: Spacing.spacing.medium,
        backgroundColor: isDarkMode ? Colors.modes.dark.background : Colors.background,
    };
    return (
        <SafeAreaView style={containerStyle}>
            <ScrollView>
                <SectionHeader title='사진' />
                <PhotoList />
                <SectionHeader title='위치' />
                <Map navigation={props.navigation} />
                <SectionHeader title='코멘트' />
                <Comment />
            </ScrollView>
        </SafeAreaView >
    );
}
