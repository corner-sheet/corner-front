import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';

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
  let newData = {
    user: {
      id: 3,
      username: '울끈불끈 책상 3',
    },
    content: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  const [data, setData] = useState(props.route.params.item.comments);
  const [comment, setComment] = useState('');
  const addComment = input => {
    newData.content = input;
    let arrCopy = [...data];
    arrCopy.unshift(newData);
    setData(arrCopy);
  };
  const renderItem = ({item}) => (
    <View>
      <Text>{item.content}</Text>
    </View>
  );
  return (
    <SafeAreaView style={containerStyle}>
      <View>
        <TextInput
          onChangeText={text => {
            setComment(text);
          }}
          placeholder="아무거나 입력해주세요."
        />
        <TouchableOpacity onPress={() => addComment(comment)}>
          <Text>제출</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        extraData={data}
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
