import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainButton from '../components/MainButton';
import Title from '../components/Title';
import LogoImage from  '../components/LogoImage';
import Colors from '../constants/colors';
import EmailCode from '../components/EmailCode';

const CodeRecoveryScreen = props => {
    return(
        <View style={styles.body}>
            <LogoImage style={styles.logo}/>
            <Title style={styles.text}> Digite o código enviado </Title>
            <EmailCode />
            <MainButton style={styles.button} title="Verificar"/>
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
        marginTop: 90
    },
    text:{
        marginTop: 140,
        marginBottom: 30,
        fontFamily: 'roboto-bold'
    },
    button: {
        marginTop: 220
    }
});

export default CodeRecoveryScreen;
