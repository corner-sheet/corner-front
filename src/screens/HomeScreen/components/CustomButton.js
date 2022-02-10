import React from 'react';
import Spacing from '../../../utils/Spacing';
import Colors from '../../../utils/Colors';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export const CustomButton = ({ navigation }) => (
  <>
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        nested navigation 이해하기!
        하단의 tab navigator는 총 home, search, action, like, profile 이 있습니다.
        각각 여러 개의 screen을 가진 stack navigator입니다.
        바로 아래의 버튼을 클릭하면 search 화면이 눈에 보이지만, 바텀 탭의 search는 활성화되지 않습니다.
        왜 그럴까요?
        왜냐하면 지금 우리는 home stack navigator 내부에 있는 search screen으로 이동했기 때문입니다.
        바텀 탭의 search는 search stack navigator를 의미하며, 이 안에도 search screen이 존재합니다.
      </Text>
      <Button
        title="Go to Nested Search Screen in Home Tab"
        color="#f194ff"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: Spacing.spacing.medium,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: Spacing.spacing.medium,
    borderBottomColor: Colors.horizontalRule,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});