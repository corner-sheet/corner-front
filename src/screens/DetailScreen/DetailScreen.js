import * as React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import {CustomButton} from './components';
import {FlatList} from 'react-native-gesture-handler';

export function DetailScreen({route}) {
  const isDarkMode = useColorScheme() === 'dark';
  const containerStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Spacing.spacing.medium,
    backgroundColor: isDarkMode
      ? Colors.modes.dark.background
      : Colors.background,
  };
  let data = [
    {
      key: '1',
      src: require('../../assets/1.png'),
      likes: '10',
      description: '1게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상',
          },
          content: '그 사진 별로네요',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 책상',
          },
          content: '그 사진 별로네요',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      ],
      location: '1서울시 영등포구',
      detailLocation: '1서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '2',
      src: require('../../assets/2.jpeg'),
      likes: '12',
      description: '2게시글입니다',
      comments: [{1: '2첫번째 댓글'}, {2: '2두번째 댓글'}],
      location: '2서울시 영등포구',
      detailLocation: '2서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '3',
      src: require('../../assets/3.jpeg'),
      likes: '15',
      description: '3게시글입니다',
      comments: [{1: '3첫번째 댓글'}, {2: '3두번째 댓글'}],
      location: '3서울시 영등포구',
      detailLocation: '3서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '4',
      src: require('../../assets/4.jpeg'),
      likes: '16',
      description: '4게시글입니다',
      comments: [{1: '4첫번째 댓글'}, {2: '4두번째 댓글'}],
      location: '4서울시 영등포구',
      detailLocation: '4서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '5',
      src: require('../../assets/5.jpeg'),
      likes: '17',
      description: '5게시글입니다',
      comments: [{1: '5첫번째 댓글'}, {2: '5두번째 댓글'}],
      location: '5서울시 영등포구',
      detailLocation: '5서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '6',
      src: require('../../assets/6.jpeg'),
      likes: '26',
      description: '6게시글입니다',
      comments: [{1: '6첫번째 댓글'}, {2: '6두번째 댓글'}],
      location: '6서울시 영등포구',
      detailLocation: '6서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '7',
      src: require('../../assets/7.jpeg'),
      likes: '18',
      description: '7게시글입니다',
      comments: [{1: '7첫번째 댓글'}, {2: '7두번째 댓글'}],
      location: '7서울시 영등포구',
      detailLocation: '7서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '8',
      src: require('../../assets/8.jpeg'),
      likes: '19',
      description: '8게시글입니다',
      comments: [{1: '8첫번째 댓글'}, {2: '8두번째 댓글'}],
      location: '8서울시 영등포구',
      detailLocation: '8서울시 영등포구 선유서로 21길 35',
    },
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Detail', {src: item.src});
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{width: 190, height: 300, margin: 1}}
          resizeMode="cover"
          source={item.src}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={containerStyle} style={{}}>
      <ScrollView style={{width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            height: 84,
            paddingHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'lightgrey', fontSize: 64}}>
            500m
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>
              이태원 경리단길
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{width: 420, height: 600}}
          resizeMode="cover"
          source={route.params.item.src}
        />
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 52,
              marginBottom: 10,
            }}>
            <Text>프로필</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 52,
              marginBottom: 10,
            }}>
            <Text>{route.params.item.likes}</Text>
          </View>
        </View>
      </ScrollView>
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
