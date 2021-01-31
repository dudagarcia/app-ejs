import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const BlueTitle = props => {
    return(
        <View>
            <Text style={{...styles.title,...props.style}}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        color: colors.mainDark,
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default BlueTitle;