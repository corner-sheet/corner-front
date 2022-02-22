import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, useColorScheme , FlatList, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import { Button } from 'react-native-paper';
import {CheckBox} from "native-base"
// import { images } from '../images';
// import { CustomButton } from './components';

export function SelectFavoriteMoodScreen() {
	
	const isDarkMode = useColorScheme() === 'dark';
	const containerStyle = {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: Spacing.spacing.medium,
		backgroundColor: isDarkMode ? Colors.modes.dark.background : Colors.background,
	};

	const [selected, setSelected] = React.useState();

	const data = [
		{
		unique_id : 1,
		text : "실내",
		src :"/utils/images/inside.jpg",
		},
		{
		unique_id : 2,
		text : "야외",
		//src :"../../utils/images/outside.jpg",
		},
		{
		unique_id : 3,
		text : "도시의",
		//src :"../../utils/images/city.jpg",
		},
		{
		unique_id : 4,
		text : "자연의",
		//src :"../../utils/images/nature.jpg",
		},
		{
		unique_id : 5,
		text : "로맨틱",
		//src :"../../utils/images/romantic.jpg",
		},
		{
		unique_id : 6,
		text : "잔잔한",
		//src :"../../utils/images/inside.jpg",
		},
	];

	const onPress = (item) => {
		setSelected(item);
	}

	const isSelected = (item) => {
		return selected?.unique_id === item.unique_id;
	}
	return (
		<SafeAreaView style={containerStyle}>
			<View style={styles.header}><Text>header</Text></View>
			<View style={styles.title}>
				<Text style={styles.maintitle}>관심 키워드 설정</Text>
				<Text>선택하신 키워드를 기반으로 추천해드립니다</Text>
			</View>
			<View style={styles.content}>
				<ScrollView>
				{
				data.map((item, index) => {
					return(
					<TouchableOpacity
						key={item.unique_id}
						onPress={() => setSelected(item)}
						style={{
						padding : 25,
						margin : 10,
						elevation: 2,
						numColumns: 4,
						height: 90,
    					width: 130,
						justifyContent: 'center',
    					alignItems: 'center',
						backgroundColor : isSelected(item) ? "#bebebe" : "#fff",
						}}
					>
					<Image source={{ uri: item.src }} />
					<Text>{item.text}</Text>

					</TouchableOpacity>
					)
				})
				}
				</ScrollView>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity style={[styles.button, {backgroundColor: "#000000"}]} onPress={() => alert('시작하기 버튼')}>
        		<Text style={styles.button}>시작하기</Text>
      		</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white',
	},
	header: {
		width: '100%',
		height: '9%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		width: '100%',
		height: '8%',
		justifyContent: 'center',
			// textAlign: 'center',
		marginVertical: Spacing.spacing.medium,
	},
	maintitle:{
		fontSize: Spacing.fontSize.xxl,
		fontWeight: Spacing.fontWeight.bold,
		color : Colors. primary,
	},
	content: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#d6ca1a',
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
});