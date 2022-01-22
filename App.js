import React from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux'
import styles from './styles';
import HomeScreen from './screens/HomeScreen';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from "./redux/reducer/rootReducer";
import thunk from "redux-thunk"
import FlashMessage from "react-native-flash-message";
import StackNavigation from './navigation/Stack';
import { NavigationContainer } from '@react-navigation/native'


export default function App() {

  const globalStore = createStore(rootReducer, applyMiddleware(thunk))  
  
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        < StackNavigation />
      </NavigationContainer>
    <FlashMessage position="top" />
    </Provider>
  );
}

