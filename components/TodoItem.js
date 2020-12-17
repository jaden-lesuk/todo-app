import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {getTodos} from '../flux/actions/todoActions';

import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    componentDidMount(){
        this.props.getTodos()
    }
    

    render(){
        const {todos} = this.props;

        return(
            <View style={styles.container}> 
            </View>
            
      )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#280000",
        marginBottom: 5,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
})

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    getTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const {todos} = state
}


export default connect(mapStateToProps, {getTodos})(TodoItem);