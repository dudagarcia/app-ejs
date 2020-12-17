import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors.js';

const MainButton = props => {

    return (
        <TouchableOpacity style={{...styles.buttonContainer, ...props.style}} onPress={props.onPress} >
            <View >
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({

    buttonContainer: {
        width: '35%',
        backgroundColor:'white',
        borderRadius: 15,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: Colors.mainDark,
        fontFamily: 'roboto-bold',
        fontSize: 18
    }

});

export default MainButton;