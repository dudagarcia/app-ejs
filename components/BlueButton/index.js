import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

const BlueButton = props => {
    return(
        <View>
            <TouchableOpacity activeOpacity={.4} style={styles.button}> 
                <Text style={{...styles.text,...props.style}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        borderRadius: 67,
        backgroundColor: colors.mainDark,
        width: 174,
        height: 59,
        marginTop: 225,
        marginRight: 5,
    },
    text:{
        color: '#ffffff',
        fontFamily: 'roboto-bold', 
        fontWeight: "700",
        fontSize: 18,
        alignItems: 'center',
        marginLeft: 40,
        marginTop: 15
    }
});

export default BlueButton;