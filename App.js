import React from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux'
import styles from './styles';
import Navigation from './components/Navigation';
import Home from './screens/HomeScreen';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from "./redux/reducer/rootReducer";
import thunk from "redux-thunk"
import FlashMessage from "react-native-flash-message";


export default function App() {

  const globalStore = createStore(rootReducer, applyMiddleware(thunk))  
  
  return (
    <Provider store={globalStore}>
    <View style={styles.container}>
    <Navigation />
    </View>
    <FlashMessage position="top" />
    </Provider>
  );
}

