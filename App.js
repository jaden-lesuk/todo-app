import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoItem from './components/TodoItem';

import {Provider} from 'react-redux';
import configureStore from './flux/configureStore';

const store = configureStore()

export default function App() {
  // const getDataUsingAsyncAwaitGetCall = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://www.mocky.io/v2/5dfb8eab2f000056c4ffa05c',
  //     );
  //     alert(JSON.stringify(response.data));
  //   } catch (error) {
  //     // handle error
  //     alert(error.message);
  //   }
  // };

  return (
    <Provider store = {store}>
      <View style={styles.container}>
        <Text>Open upon your app!</Text>
        <StatusBar style="auto" />
        <TodoItem/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
