import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    useColorScheme,
    StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Comment, PhotoList, Map } from './components';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import { VStack, Text } from 'native-base';

export function PublishScreen(props) {
    const isDarkMode = useColorScheme() === 'dark';
    const containerStyle = {
        flex: 1,
        marginHorizontal: Spacing.spacing.medium,
        backgroundColor: isDarkMode ? Colors.modes.dark.background : Colors.background,
    };
    const search = useSelector(state => state.search);
    const photos = useSelector(state => state.post.draft.photos);
    return (
        <SafeAreaView style={containerStyle}>
            <ScrollView>
                <VStack space={1} style={styles.container}>
                    <Text fontSize="lg">사진</Text>
                    <PhotoList photos={photos} />
                    <Text fontSize="lg">위치</Text>
                    <Map navigation={props.navigation} search={search} />
                    <Text fontSize="lg">코멘트</Text>
                    <Comment />
                </VStack>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: Spacing.spacing.sm,
        marginLeft: Spacing.spacing.md,
    },
});