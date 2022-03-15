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
      src: [
        require('../../assets/1.png'),
        require('../../assets/1.png'),
        require('../../assets/1.png'),
      ],
      likes: '10',
      description: '1게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상 1',
          },
          content: '그 사진 별로네요 1',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 111',
              },
              content: '답글 123',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 112',
              },
              content: '답글 3',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 4',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 113',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 114',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 115',
              },
              content: '답글 3',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 116',
              },
              content: '답글 4',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 117',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 118',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 119',
              },
              content: '답글 3',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 120',
              },
              content: '답글 4',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 120',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 121',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 121',
              },
              content: '답글 3',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 4',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 122',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 123',
              },
              content: '답글 3',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 4',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 124',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 125',
              },
              content: '답글 3',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 4',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 의자 1',
          },
          content: '그 사진 좋아요 1',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 126',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
      ],
      location: '1서울시 영등포구',
      detailLocation: '1서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '2',
      src: [
        require('../../assets/2.jpeg'),
        require('../../assets/2.jpeg'),
        require('../../assets/2.jpeg'),
      ],
      likes: '12',
      description: '2게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상 2',
          },
          content: '그 사진 별로네요 2',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 127',
              },
              content: '답글 12',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 의자 2',
          },
          content: '그 사진 좋아요 2',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 128',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
      ],
      location: '2서울시 영등포구',
      detailLocation: '2서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '3',
      src: [require('../../assets/3.jpeg'), require('../../assets/3.jpeg')],
      likes: '15',
      description: '3게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상 3',
          },
          content: '그 사진 별로네요 3',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 129',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 130',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 의자 3',
          },
          content: '그 사진 좋아요 3',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 131',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
      ],
      location: '3서울시 영등포구',
      detailLocation: '3서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '4',
      src: [require('../../assets/4.jpeg'), require('../../assets/4.jpeg')],
      likes: '16',
      description: '4게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상 4',
          },
          content: '그 사진 별로네요 4',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 132',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 의자 4',
          },
          content: '그 사진 좋아요 4',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 133',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
      ],
      location: '4서울시 영등포구',
      detailLocation: '4서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '5',
      src: [
        require('../../assets/5.jpeg'),
        require('../../assets/5.jpeg'),
        require('../../assets/5.jpeg'),
      ],
      likes: '17',
      description: '5게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상 5',
          },
          content: '그 사진 별로네요 5',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 134',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 의자 5',
          },
          content: '그 사진 좋아요 5',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 135',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
      ],
      location: '5서울시 영등포구',
      detailLocation: '5서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '6',
      src: [require('../../assets/6.jpeg'), require('../../assets/6.jpeg')],
      likes: '26',
      description: '6게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상 6',
          },
          content: '그 사진 별로네요 6',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 136',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 의자 6',
          },
          content: '그 사진 좋아요 6',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 137',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
      ],
      location: '6서울시 영등포구',
      detailLocation: '6서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '7',
      src: [require('../../assets/7.jpeg'), require('../../assets/7.jpeg')],
      likes: '18',
      description: '7게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상 7',
          },
          content: '그 사진 별로네요 7',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 1381',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 의자7',
          },
          content: '그 사진 좋아요 7',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 139',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
      ],
      location: '7서울시 영등포구',
      detailLocation: '7서울시 영등포구 선유서로 21길 35',
    },
    {
      key: '8',
      src: [require('../../assets/8.jpeg'), require('../../assets/8.jpeg')],
      likes: '19',
      description: '8게시글입니다',
      comments: [
        {
          user: {
            id: 1,
            username: '울끈불끈 책상 8',
          },
          content: '그 사진 별로네요 8',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 140',
              },
              content: '답글 12',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
        {
          user: {
            id: 2,
            username: '울끈불끈 의자 8',
          },
          content: '그 사진 좋아요 8',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          replyComment: [
            {
              user: {
                id: 1,
                username: '울끈불끈 책상 141',
              },
              content: '답글 1',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            {
              user: {
                id: 2,
                username: '울끈불끈 의자 11',
              },
              content: '답글 2',
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
          ],
        },
      ],
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
      <Image
        style={{width: 190, height: 300, margin: 1}}
        resizeMode="cover"
        source={item.src[0]}
      />
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
              props.navigation.navigate('Search');
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

const styles = StyleSheet.create({
  title: {
    fontSize: Spacing.fontSize.md,
    fontWeight: Spacing.fontWeight.bold,
    textAlign: 'center',
    marginVertical: Spacing.spacing.medium,
  },
});
