import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

const BlueButton = props => {
    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={.4} style={styles.button} onPress={props.onPress}> 
                <Text style={{...styles.text,...props.style}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 67,
        backgroundColor: colors.mainDark,
        width: 174,
        height: 59,
    },
    text:{
        color: '#ffffff',
        fontFamily: 'roboto-bold', 
        fontWeight: "700",
        fontSize: 18,
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});

export default BlueButton;