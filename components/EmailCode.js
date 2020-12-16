import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';

const EmailCode = props => {
    return(
        <View style={styles.body}>
            <View style={styles.char}>
                <TextInput 
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                /> 
            </View>
            <View style={styles.char}> 
                <TextInput 
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    char:{
        borderWidth: 3,
        width: 52,
        height: 59,
        borderRadius: 13,
        borderColor: Colors.lighterBlue,
        backgroundColor: 'white', 
        marginLeft: 3,
        alignItems: 'center'
    },
    line:{
        borderBottomColor: Colors.lighterBlue,
        borderBottomWidth: 2,
        height: 45,
        width: 30,
        fontSize: 30,
        textAlign: 'center'
    }, 
    text:{
        
    }
});

export default EmailCode;