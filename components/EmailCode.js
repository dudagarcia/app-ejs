import React, { useRef } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import Colors from '../constants/colors';

const EmailCode = props => {
    const ref_first = useRef();
    const ref_second = useRef();
    const ref_third = useRef();
    const ref_fourth = useRef();
    const ref_fifth = useRef();
    const ref_sixth = useRef();

    function dismissKeyboardAction() {
        dismissKeyboard();
    }

    return(
        <View style={styles.body}>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_first}
                    onChangeText={ (event) => { event && ref_second.current.focus(); }}
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                /> 
            </View>
            <View style={styles.char}> 
                <TextInput 
                    ref={ref_second}
                    onKeyPress={ (event) => { if(event.nativeEvent.key === 'Backspace') ref_first.current.focus(); } }
                    onChangeText={(event) => { event && ref_third.current.focus(); }}
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_third}
                    onKeyPress={ (event) => { if(event.nativeEvent.key === 'Backspace') ref_second.current.focus(); }} 
                    onChangeText={(event) => { event && ref_fourth.current.focus(); }}
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_fourth}
                    onKeyPress={ (event) => { if(event.nativeEvent.key === 'Backspace') ref_third.current.focus(); } }
                    onChangeText={(event) => { event && ref_fifth.current.focus(); }}
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_fifth}
                    onKeyPress={ (event) => { if(event.nativeEvent.key === 'Backspace') ref_fourth.current.focus(); } }
                    onChangeText={(event) => { event && ref_sixth.current.focus(); }}
                    keyboardType="numeric"
                    maxLength={1} 
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_sixth}
                    onKeyPress={ (event) => { if(event.nativeEvent.key === 'Backspace') ref_fifth.current.focus(); } }
                    onChangeText={ () => {Keyboard.dismiss();}}
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