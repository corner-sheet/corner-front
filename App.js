import 'react-native-gesture-handler';
import React from 'react';
import { AppNavigator } from "./src/navigation";
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from "redux-form";

import { postReducer, likeReducer, authReducer } from './src/reducers';

import {
  StatusBar,
  useColorScheme,
} from 'react-native';

const rootReducer = combineReducers({
  post: postReducer,
  like: likeReducer,
  auth: authReducer,
  form: formReducer,
})

const store = createStore(rootReducer);

// TODO("Add Splash Screen")
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </Provider>
  );
};

export default App;
