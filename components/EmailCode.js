import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import Colors from '../constants/colors';

const EmailCode = props => {
    const[code, setCode] = useState([]);
    let array = [];
    
    const ref_first = useRef();
    const ref_second = useRef();
    const ref_third = useRef();
    const ref_fourth = useRef();
    const ref_fifth = useRef();
    const ref_sixth = useRef(); 

    function codeConcat(event, pos){
        array = code;
        array[pos] = event;
        setCode(array);
        console.log(code);
    }

    function excludeEvent(pos){
        array = code;
        array[pos] = '';
        setCode(array);
        console.log(code);
    }



    return(
        <View style={styles.body}>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_first}
                    onChangeText={ (event) => { 
                        if(event){ 
                            ref_second.current.focus(); 
                            codeConcat(event, 0); 
                        }
                    }}
                    onKeyPress={ (event) => { 
                        if(event.nativeEvent.key === 'Backspace')
                            excludeEvent(0);   
                    } }
                    keyboardType="numeric"
                    maxLength={1} 
                    secureTextEntry={true}
                    style={styles.line}
                /> 
            </View>
            <View style={styles.char}> 
                <TextInput 
                    ref={ref_second}
                    onKeyPress={ (event) => { 
                        if(event.nativeEvent.key === 'Backspace'){
                            excludeEvent(1);
                            ref_first.current.focus();      
                        }  
                    } }
                    onChangeText={ (event) => { 
                        if(event){ 
                            ref_third.current.focus(); 
                            codeConcat(event, 1); 
                        }
                    }}
                    keyboardType="numeric"
                    maxLength={1} 
                    secureTextEntry={true}
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_third}
                    onKeyPress={ (event) => { 
                        if(event.nativeEvent.key === 'Backspace'){
                            excludeEvent(2);
                            ref_second.current.focus();
                        }  
                    }} 
                    onChangeText={ (event) => { 
                        if(event){ 
                            ref_fourth.current.focus(); 
                            codeConcat(event, 2); 
                        }
                    }}
                    keyboardType="numeric"
                    maxLength={1} 
                    secureTextEntry={true}
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_fourth}
                    onKeyPress={ (event) => { 
                        if(event.nativeEvent.key === 'Backspace'){
                            excludeEvent(3);
                            ref_third.current.focus();
                        } 
                    } }
                    onChangeText={ (event) => { 
                        if(event){ 
                            ref_fifth.current.focus(); 
                            codeConcat(event, 3); 
                        }
                    }}
                    keyboardType="numeric"
                    maxLength={1} 
                    secureTextEntry={true}
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_fifth}
                    onKeyPress={ (event) => { 
                        if(event.nativeEvent.key === 'Backspace'){
                            excludeEvent(4);
                            ref_fourth.current.focus();
                        } 
                    } }
                    onChangeText={ (event) => { 
                        if(event){ 
                            ref_sixth.current.focus(); 
                            codeConcat(event, 4); 
                        }
                    }}
                    keyboardType="numeric"
                    maxLength={1} 
                    secureTextEntry={true}
                    style={styles.line}
                />
            </View>
            <View style={styles.char}>
                <TextInput 
                    ref={ref_sixth}
                    onKeyPress={ (event) => { 
                        if(event.nativeEvent.key === 'Backspace'){
                            excludeEvent(5);
                            ref_fifth.current.focus();
                        }  
                    } }
                    onChangeText={ (event) => { 
                        if(event){
                            codeConcat(event, 5);
                            Keyboard.dismiss();
                        }
                    }}
                    keyboardType="numeric"
                    maxLength={1} 
                    secureTextEntry={true}
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
    }
});

export default EmailCode;