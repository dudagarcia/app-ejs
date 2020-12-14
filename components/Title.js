import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = props => {

    return (
        <Text style={styles.title}>{props.children}</Text>
    );

}

const styles = StyleSheet.create({
    
    title:{
        fontFamily: 'roboto-regular',
        color: '#fff',
        fontSize: 30,
        marginTop: 10
    }
});

export default Title;