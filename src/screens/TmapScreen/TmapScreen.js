import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import Colors from '../../utils/Colors';
import { MapView, HotPlaceModal } from './components';
import { useSelector } from 'react-redux';

export function TmapScreen(props) {
	const isDarkMode = useColorScheme() === 'dark';
	const containerStyle = {
		flex: 1,
		backgroundColor: isDarkMode ? Colors.modes.dark.background : Colors.background,
	};
	const search = useSelector(state => state.search);
	const [isModal, setModal] = useState(false);
	return (
		<SafeAreaView style={containerStyle}>
			<MapView search={search} navigation={props.navigation} />
			<HotPlaceModal search={search} navigation={props.navigation} />
		</SafeAreaView >
	);
}