import React, {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import {CustomButton} from './components';
import {TabNavigator} from '../../navigation/RootNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native-gesture-handler';

export function HomeScreen(props) {
  const isDarkMode = useColorScheme() === 'dark';
  let data = [
    {
      key: '1',
      src: require('../../assets/1.png'),
      likes: '10',
      description: '1게시글입니다',
      comments: [{1: '1첫번째 댓글'}, {2: '1두번째 댓글'}],
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
  const containerStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Spacing.spacing.medium,
    backgroundColor: isDarkMode
      ? Colors.modes.dark.background
      : Colors.background,
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Detail', {item: item});
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

  const sortHot = () => {
    data = data.sort((a, b) => -a.likes.localeCompare(b.likes));
  };

  return (
    <SafeAreaView>
      <View
        style={{height: 68, paddingHorizontal: 20, backgroundColor: 'white'}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F5F5F5',
              width: '100%',
              height: 26,
              justifyContent: 'center',
            }}
            onPress={() => {
              props.navigation.navigate('SearchTab');
            }}>
            <MaterialIcons
              name="search"
              size={18}
              color={Colors.black}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              sortHot();
            }}
            style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>Hot</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingBottom: 138,
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          extraData={data}
          numColumns={2}
          scrollEnable={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* <Image
        source={require('../../assets/2124624E567B527220.png')}
        style={{width: 200, margin: 1}}
        resizeMode="contain"
      />
      <Image
        source={{url: 'https://i.ibb.co/xmVTy2M/2124624-E567-B527220.png'}}
      /> */}
    </SafeAreaView>
  );
}

HomeScreen.defaultProps = {};

const styles = StyleSheet.create({
  title: {
    fontSize: Spacing.fontSize.md,
    fontWeight: Spacing.fontWeight.bold,
    textAlign: 'center',
    marginVertical: Spacing.spacing.medium,
  },
});
