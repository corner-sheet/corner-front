import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Modal, Image, ScrollView } from 'react-native';
import { Badge, HStack, Text, VStack, Button } from 'native-base';

export const HotPlaceModal = ({ navigation, search }) => {
    const { current } = search;
    let roadAddressList = current.roadAddress != ""
        ? current.roadAddress.split(' ')
        : ['주소정보 없음', '주소정보 없음', '주소정보 없음', '주소정보 없음'];
    const { longitude, latitude } = current;
    const dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <VStack space={'2'} margin={'2'}>
                <HStack space={'4'}>
                    <Image
                        source={{
                            uri: 'https://i.ibb.co/J71Mcc1/Group-8.png',
                            width: 45,
                            height: 45,
                        }}
                        width={40}
                        height={40}
                    />
                    <VStack>
                        <Text fontSize={'lg'}>근처 인기 장소</Text>
                        <Text fontSize={'xs'}>{roadAddressList[1]}</Text>
                    </VStack>
                </HStack>
                <ScrollView horizontal={true} >
                    <HStack space={'1.5'}>
                        {['음식점', '카페', '관광지', '호텔', '공원 및 정원', '바', '음식', '카페점', '관광', '호텔 및 숙박', '정원', '와인바'].map(item => (
                            <Button key={item} size={'sm'} variant={'subtle'} colorScheme={'gray'}>{item}</Button>
                        ))}
                    </HStack>
                </ScrollView>
            </VStack>
            <HStack space={'4'} margin={'2'}>
                <Image
                    source={{
                        uri: 'https://i.ibb.co/K54Q6xR/marker1.png',
                        width: 60,
                        height: 60,
                    }}
                    width={60}
                    height={60}
                />
                <VStack>
                    <Text fontSize={'md'}>{roadAddressList[2]}</Text>
                    <Text fontSize={'xs'}>공원 · 게시물 19.8만</Text>
                    <Text bold fontSize={'xs'}>{roadAddressList[3]}m</Text>
                </VStack>
            </HStack>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
});