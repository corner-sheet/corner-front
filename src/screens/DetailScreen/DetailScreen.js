import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import {FlatList} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {fetchPost} from '../../reducers/post';
import {useSelector} from 'react-redux';

export function DetailScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost('1'));
  }, []);
  const posts = useSelector(state => state.post.posts);

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

  const onShare = async () => {
    const result = await Share.share({
      message: '복사하기',
    });
  };
  const [heart, setHeart] = useState(false);
  const toggleHeart = () => {
    setHeart(previousState => !previousState);
  };
  return (
    <SafeAreaView style={containerStyle} style={{}}>
      <ScrollView style={{width: '100%'}}>
        {/* <View
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
            <Text style={{fontWeight: 'bold', color: 'grey'}}>
              {route.params.item.location}
            </Text>
          </TouchableOpacity>
        </View> */}
        <View>
          <SliderBox
            images={props.route.params.item.src}
            onCurrentImagePressd={index => {
              alert(index);
            }}
            sliderBoxHeight={700}
          />
        </View>
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
              justifyContent: 'space-between',
              height: 52,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  toggleHeart();
                }}>
                {heart ? (
                  <MaterialCommunityIcons
                    name="heart"
                    size={26}
                    color="#ee4757"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={26}
                    color={Colors.black}
                  />
                )}
              </TouchableOpacity>
              <Text>{props.route.params.item.likes}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Comment', {
                    item: props.route.params.item,
                  });
                }}>
                <Ionicons
                  name="chatbubble-outline"
                  size={26}
                  color={Colors.black}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => onShare()}>
                <Feather name="share" size={26} color={Colors.black} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 52,
              marginBottom: 10,
            }}>
            <Text>{props.route.params.item.description}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log({posts});
          }}>
          <Text>버튼</Text>
        </TouchableOpacity>
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
