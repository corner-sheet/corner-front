import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, useColorScheme , FlatList, View, ImageBackground, TouchableOpacity, ImageBackgroundBase, ProgressViewIOSComponent,} from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
// import { images } from '../images';
// import { CustomButton } from './components';

const BRANDS = [
	{
	  name: '실내',
	  slug: 'inside',
	  src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
	  name: '야외',
	  slug: 'outside',
	  src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
	  name: '도시',
	  slug: 'city',
	  src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
		name: '자연',
		slug: 'nature',
		src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
	  name: '로맨틱',
	  slug: 'romantic',
	  src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
		name: '감성적인',
		slug: 'emotional',
		src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
		name: '편안한',
		slug: 'comfortable',
		src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
		name: '42서울',
		slug: '42seoul',
		src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
		name: '어디로',
		slug: 'uhdiro',
		src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
	{
		name: '조용한',
		slug: 'quiet',
		src : "https://i.ibb.co/swkxw1T/city.jpg",
	},
]


export function SelectFavoriteMoodScreen() {

	const isDarkMode = useColorScheme() === 'dark';
	const containerStyle = {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: Spacing.spacing.medium,
		backgroundColor: isDarkMode ? Colors.modes.dark.background : Colors.background,
	};

	const [brands, setBrands] = React.useState(BRANDS);
  const [selectedBrands, setSelectedBrands] = React.useState([]);

  const renderBrands = ({ item, index }) => {
    const { name, slug, src} = item;
    const isSelected = selectedBrands.filter((i) => i === slug).length > 0;

    return (
      <TouchableOpacity
        onPress={() => {
          if (isSelected) {
            setSelectedBrands((prev) => prev.filter((i) => i !== slug))
			

          } else {
            setSelectedBrands(prev => [...prev, slug])
          }
        }}
		>
        {/* style={[styles.item, isSelected && { backgroundColor: 'black'}]> */}
		<ImageBackground source={{uri: item.src}} style={[styles.item, !isSelected && {backgroundColor: 'black', opacity: 1}]}>
        <Text style={[styles.select, {color: isSelected ? "black" : "white"}]}>{name}</Text>
		</ImageBackground>
      </TouchableOpacity>
    );
  };
	return (
		<SafeAreaView style={containerStyle}>
			<View style={styles.header}></View>
			<View style={styles.title}>
				<Text style={styles.maintitle}>관심 키워드 설정</Text>
				<Text>선택하신 키워드를 기반으로 추천해드립니다</Text>
			</View>
			<View style={styles.content}>
				<View style={styles.container}>
					<FlatList
						data={brands}
						renderItem={renderBrands}
						numColumns={2}
						scrollEnabled={true}
					/>
				</View>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity style={[styles.button, {backgroundColor: "#000000"}]} onPress={() => {props.navigation.navigate('Home')}}>
        		<Text style={styles.button}>시작하기</Text>
      		</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white',
	},
	header: {
		width: '100%',
		height: '3%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		width: '100%',
		height: '8%',
		justifyContent: 'center',
			// textAlign: 'center',
		marginVertical: Spacing.spacing.medium,
		paddingLeft: '2%',
	},
	maintitle:{
		fontSize: 28,
		fontWeight: Spacing.fontWeight.bold,
		color : Colors. primary,
	},
	content: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: '#d6ca1a',
		flexDirection: 'row',
	},
	footer: {
		width: '100%',
		height: '10%',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 0,
		paddingTop: 7,
		// borderRadius: 5,
		fontSize: Spacing.fontSize.xl,
		fontWeight: Spacing.fontWeight.bold,
		color : Colors. background,
	  },
	  item: {
		tintColor: 'gray', 
		opacity: 0.3,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		margin: 18,
		width: 160,
		height: 100,
	  },
	  select: {
		  fontSize: Spacing.fontSize.xl,
		  fontWeight: Spacing.fontWeight.bold
	  }
});