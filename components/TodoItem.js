import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const iconMap = {
    "done":"done",
    "in-progress":"play-arrow",
    "pending":"new-releases",
}

class TodoItem extends React.Component {

    render(){
        const { due_date, name, status } = this.props.todo.item;
        console.log(this.props.todo)

        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.dateText}>{due_date}</Text>
                    <MaterialIcons name={`${iconMap[status]}`} size={25} color="green" />
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        marginBottom: 5,
        borderRadius: 5,
        borderColor: '#dbdbdb',
        borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    text: {
        fontSize: 20,
        color: '#717171'
    },

    dateText: {
        fontSize: 15,
        color: '#717171',
        textDecorationLine: 'underline'
    }
})



export default TodoItem;