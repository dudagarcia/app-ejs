import React from 'react';
import { Text, StyleSheet, View, Image, TextInput } from 'react-native';
import Images from '../constants/images.js';

const Input = props => {

    return (

        <View style={styles.body}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.miniLogo}
                    source={props.image} 
                />
            </View>
            <TextInput 
                secureTextEntry={props.password}
                style={styles.input} 
                placeholder={props.placeholder} placeholderTextColor='#fff' 
            />
        </View>
    );

}

const styles = StyleSheet.create({

    body: {
        flexDirection: 'row',
        width: '75%',
        height: 40,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginTop: 20

    },
    miniLogo: {
        width: '80%',
        height: '80%',

    },
    input: {
        flex: 6,
        color: '#fff',
        marginLeft: 10

    },
    imageContainer: {
        borderRightColor: '#fff',
        borderRightWidth: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


});

export default Input;