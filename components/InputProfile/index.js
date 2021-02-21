import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Colors from '../../constants/colors';

const InputProfile = props => {
    return(
        <View style={{...props.style, ...styles.container}}>
            <TextInput 
                placeholder={props.text} 
                placeholderTextColor={Colors.mediumBlue} 
                style={styles.placeholder} 
                onChangeText={props.onChangeText}
                secureTextEntry={props.password}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.softBlue,
        borderRadius: 19,
        width: 266,
        height: 59
    },
    placeholder:{
        fontFamily: 'roboto-regular',
        color: Colors.mainDark,
        marginLeft: 15,
        marginTop: 14
    }
});

export default InputProfile;