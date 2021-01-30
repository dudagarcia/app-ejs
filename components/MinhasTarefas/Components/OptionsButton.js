import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const OptionsButton = (props) => {

    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Image source={props.image} 
            style={styles.buttonImage}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 8
    },
    buttonImage: {
        width: 30,
        height: 30,
    }
});

export default OptionsButton;