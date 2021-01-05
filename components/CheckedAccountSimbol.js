import React from 'react';
import Colors from '../constants/colors';
import Icon from  'react-native-vector-icons/Feather';
import { View, StyleSheet, Button } from 'react-native';
 
const CheckedAccountSimbol = props => {
    return( 
        <View style={{...styles.circle, ...props.style}}>
           <Icon name="check" style={styles.icon} size={30} color="white"/>
        </View>
    );
};

const styles = StyleSheet.create({
    circle:{
        width: 39,
        height: 39,
        borderRadius: 67,
        borderColor: Colors.lighterBlue,
        color: 'white',
        backgroundColor: Colors.lighterBlue
    },
    icon:{
        marginLeft:5,
        marginTop: 5
    }
});

export default CheckedAccountSimbol;