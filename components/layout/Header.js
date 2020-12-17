import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';


const Header = ({title}) => {
  return(
      <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
          <MaterialIcons style={styles.icon} name="add-box" size={32} color="green" />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        padding: 10,
        backgroundColor: '#dce1e8',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e4e8',
    },
    text: {
        color: '#717171',
        fontSize: 25,
        textAlign: "left",
        textAlignVertical: "center"
    },
    icon: {
        marginLeft: 'auto',
        marginTop: 'auto',
    }
})

export default Header;