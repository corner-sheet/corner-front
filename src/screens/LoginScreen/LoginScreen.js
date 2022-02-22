import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  KeyboardAvoidingView,
} from 'react-native';
import Spacing from '../../utils/Spacing';
import Colors from '../../utils/Colors';
import * as actions from '../../reducers/auth/authActions';
import {useDispatch} from 'react-redux';

export function LoginScreen(props) {
  const dispatch = useDispatch();
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={styles.title}>LoginScreen2</Text>
      <KeyboardAvoidingView enabled>
        <View>
          <TextInput
            placeholder="이메일"
            onChangeText={email => setEmail(email)}
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <TextInput
            secureTextEntry
            placeholder="비밀번호"
            onChangeText={email => setPassword(email)}
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <TouchableOpacity
            onPress={() => {
              actions.Login(email, password);
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
