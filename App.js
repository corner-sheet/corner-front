import 'react-native-gesture-handler';
import React from 'react';
import { AppNavigator } from "./src/navigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux'
import { reducer as formReducer } from "redux-form";
import { NativeBaseProvider } from 'native-base';
import { postReducer, likeReducer, authReducer, searchReducer } from './src/reducers';

import {
  StatusBar,
  useColorScheme,
} from 'react-native';

const rootReducer = combineReducers({
  post: postReducer,
  like: likeReducer,
  auth: authReducer,
  search: searchReducer,
  form: formReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

// TODO("Add Splash Screen")
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
