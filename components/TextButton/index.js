import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TextButton = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    title: {
        color: 'rgba(255, 255, 255, 0.56)',
        fontSize: 18
    }
});

export default TextButton;