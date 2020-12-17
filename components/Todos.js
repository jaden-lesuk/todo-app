import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {getTodos} from '../flux/actions/todoActions';

import TodoItem from './TodoItem';

import PropTypes from 'prop-types';

class Todos extends React.Component {
    componentDidMount(){
        this.props.getTodos()
    }
    

    render(){
        const {todos} = this.props.todo;


        return(
            <View style={styles.container}>
                <FlatList data={todos} renderItem={(todo) => (
                    <TodoItem todo={todo}/>
                )} />
            </View> 
        )
    }
}


const styles = StyleSheet.create({
    container: {

        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
})

Todos.propTypes = {
    todo: PropTypes.object.isRequired,
    getTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})


export default connect(mapStateToProps, {getTodos})(Todos);