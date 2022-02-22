import React, { useState } from 'react';
import {
    FlatList,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
    Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import Spacing from '../../../utils/Spacing';
import Colors from '../../../utils/Colors';

export const PhotoList = () => {
    const [photos, setPhotos] = useState([{ "key": 1 }]);
    const ListItem = ({ item }) => {
        return (
            <View>
                {item.key === 1
                    ?
                    <AddPhotoButton />
                    :
                    <Image
                        source={{
                            uri: item.uri,
                        }}
                        style={styles.photo}
                        resizeMode="cover"
                    />
                }
            </View>
        );
    };

    const AddPhotoButton = () => {
        return (
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={async () => {
                    const result = await addPhoto();
                    const newPhotos = [...photos];
                    for (let i = photos.length; i < result.assets.length; i++) {
                        newPhotos.push({
                            key: i + 1,
                            fileName: result.assets[i].fileName,
                            fileSize: result.assets[i].fileSize,
                            height: result.assets[i].height,
                            type: result.assets[i].type,
                            width: result.assets[i].width,
                            uri: result.assets[i].uri,
                        });
                    }
                    setPhotos(newPhotos);
                }}
            >
                <View style={styles.icon}>
                    <Ionicons name='ios-add' size={50} color='white' />
                </View>
            </TouchableOpacity >
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={photos}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

async function hasAndroidPermission() {
    const writePermission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const readPermission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE

    const hasPermission = await PermissionsAndroid.check(writePermission) && await PermissionsAndroid.check(readPermission);
    if (hasPermission) {
        console.log("Permission Granted");
        console.log(hasPermission);
        return true;
    }

    const status = await PermissionsAndroid.requestMultiple([writePermission, readPermission]);
    return status === 'granted';
}

async function addPhoto() {
    if (Platform.OS === "android" && !(hasAndroidPermission())) {
        return;
    }
    return await launchImageLibrary({ selectionLimit: 0 });
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    photo: {
        width: 100,
        height: 100,
        marginLeft: Spacing.spacing.xs,
        marginTop: Spacing.spacing.sm,
        marginBottom: Spacing.spacing.xs,
    },
    iconContainer: {
        width: 100,
        height: 100,
        marginLeft: Spacing.spacing.md,
        marginTop: Spacing.spacing.sm,
        marginBottom: Spacing.spacing.xs,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.horizontalRule,
    },
    icon: {
        width: 50,
        height: 50,
    },
});