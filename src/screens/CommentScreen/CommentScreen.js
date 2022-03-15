import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import {CommentProfile} from './components';
export function CommentScreen(props) {
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
  let newComment = {
    user: {
      id: 3,
      username: '울끈불끈 책상 3',
    },
    content: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    replyComment: [],
  };
  let newReply = {
    user: {
      id: 3,
      username: '울끈불끈 책상 3',
    },
    content: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  const [isReply, setIsReply] = useState(false);
  const [comment, setComment] = useState(props.route.params.item.comments);
  const [input, setInput] = useState('');

  const addComment = input => {
    newComment.content = input;
    let arrCopy = [...comment];
    arrCopy.unshift(newComment);
    setComment(arrCopy);
  };

  const addReply = input => {
    newReply.content = input;
    let arrCopy = [...reply];
    arrCopy.unshift(newReply);
    setReply(arrCopy);
    console.log(reply);
    console.log(newReply);
  };

  const renderItem = ({item, index}) => (
    <View>
      {setReply(item.replyComment)}
      <View style={{marginBottom: 10}}>
        <Text>{item.content}</Text>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => {
            setIsReply(!isReply);
            console.log(index);
          }}>
          <Text style={{fontSize: 12}}>답글달기</Text>
        </TouchableOpacity>
      </View>
      <View>
        {item.replyComment.map((a, i) => {
          return (
            <Text style={{marginLeft: 20, marginBottom: 10}}>{a.content}</Text>
          );
        })}
      </View>
    </View>
  );
  return (
    <SafeAreaView style={containerStyle}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: 60,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../utils/images/profile.jpg')}
            style={{
              resizeMode: 'cover',
              width: 36,
              height: 36,
              borderRadius: 100,
              marginRight: 10,
            }}
          />
          <TextInput
            onChangeText={text => {
              setInput(text);
            }}
            placeholder="댓글을 남겨주세요"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            isReply === true ? addReply(input) : addComment(input);
          }}>
          <Text>등록</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={comment}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        extraData={comment}
        style={{width: '100%', paddingHorizontal: 20}}
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
