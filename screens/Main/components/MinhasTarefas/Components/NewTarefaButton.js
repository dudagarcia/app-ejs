import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import images from '../../../../../constants/images';

const NewTarefaButton = (props) => {

    return(
        <TouchableOpacity 
            style={{...styles.button, ...{display: props.buttonDisplay}}} 
            onPress={props.onPress}>
            <Image style={styles.buttonImage} source={images.plusIcon.uri}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonImage: {
        width: 65,
        height: 65,
    }
});

export default NewTarefaButton;