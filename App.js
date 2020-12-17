import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Todos from './components/Todos';
import Header from './components/layout/Header'

import {Provider} from 'react-redux';
import configureStore from './flux/configureStore';

const store = configureStore()

export default function App() {

  return (
    <Provider store = {store}>
      <View style={styles.container}>
      <Header title="Tasks"/>
        <Todos/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeef5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
