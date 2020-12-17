import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainButton from '../components/MainButton';
import Title from '../components/Title';
import LogoImage from  '../components/LogoImage';
import Colors from '../constants/colors';
import EmailCode from '../components/EmailCode';
import CodeFeedback from '../components/CodeFeedback';

const CodeRecoveryScreen = props => {
    
    //var randomNumber = Math.floor(Math.random * 999999) + 100000;

    function checkCode(){
        if(correct){
            <CodeFeedback correct={true}/>
        }
        if(!correct){
            <CodeFeedback correct={false}/>
        }
        
    }
    
    return(
        <View style={styles.body}>
            <LogoImage style={styles.logo}/>
            <Title style={styles.text}> Digite o código enviado </Title>
            <EmailCode />
            <MainButton style={styles.button} onPress={ checkCode } title="Verificar"/>
        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        backgroundColor: Colors.mainDark,
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center'
    },
    logo:{
        marginTop: 90,
        marginBottom: 70
    },
    text:{
        marginTop: 80,
        marginBottom: 30,
        fontFamily: 'roboto-bold'
    },
    button: {
        marginTop: 220
    }
});

export default CodeRecoveryScreen;
