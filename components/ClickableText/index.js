import React from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import Colors from '../../constants/colors';

const ClickableText = props => {
    return(
        <View> 
            <Text 
                style={{...styles.text, ...props.style}} 
                //onPress={() => Linking.openURL('https://google.com')}
                onPress={props.onPress}>
                    {props.title} 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        color: Colors.lighterBlue,
        fontFamily: 'roboto-bold'
    }
});
export default ClickableText;