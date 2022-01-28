import React from 'react';
import {Provider} from 'react-redux'
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
      <FlashMessage position="top" style={{alignSelf: 'center', width: '95%', flex: 1, alignItems: 'center'}} />
    </Provider>
  );
}

