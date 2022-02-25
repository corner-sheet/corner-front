import React from 'react';
import Colors from '../../../utils/Colors';
import { addPhotos, removePhoto } from '../../../reducers';
import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
    Platform,
    View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';

export const PhotoList = ({ photos }) => {
    const dispatch = useDispatch();
    const ListItem = ({ item, index }) => {
        return (
            <View style={{ marginRight: 10 }}>
                {item.uri === ""
                    ?
                    <AddPhotoButton />
                    :
                    <TouchableOpacity onPress={() => dispatch(removePhoto(index))}>
                        <Image source={{ uri: item.uri, width: 100, height: 100 }} resizeMode="cover" />
                    </TouchableOpacity>
                }
            </View>
        );
    };

    const AddPhotoButton = () => {
        return (
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={async () => dispatch(addPhotos(await imageLibrary()))}>
                <Ionicons name='ios-add' size={50} color='white' />
            </TouchableOpacity >
        )
    }

    return (
        <FlatList
            horizontal
            data={photos}
            renderItem={({ item, index }) => <ListItem item={item} index={index} />}
            showsHorizontalScrollIndicator={false}
        />
    )
}

async function hasAndroidPermission() {
    const writePermission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const readPermission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE

    const hasPermission = await PermissionsAndroid.check(writePermission) && await PermissionsAndroid.check(readPermission);
    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.requestMultiple([writePermission, readPermission]);
    return status === 'granted';
}

async function imageLibrary() {
    if (Platform.OS === "android" && !(hasAndroidPermission())) {
        return;
    }
    return await launchImageLibrary({ selectionLimit: 0 });
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.horizontalRule,
    },
});