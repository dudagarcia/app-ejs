import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Input from '../components/Input.js';
import Title from '../components/Title.js';
import MainButton from '../components/MainButton.js';
import Images from '../constants/images.js';
import Colors from '../constants/colors.js';

const LoginScreen = props => {

    return (

        <View style={styles.body}>
            <Image style={styles.logo}
                    source={Images.logo.uri}
            />
            <Title>Bem-Vindx Tarefas Jr.</Title>
            <Image style={styles.simon}
                    source={Images.simonSmile.uri}
            />
            <Input
                image={Images.email.uri} 
                password={false}
                placeholder='Email Sintese'/>
 
            <Input 
                image={Images.cadeado.uri} 
                placeholder='Senha'
                password={true}/>
            <Text style={styles.text}>Esqueceu a senha? Clique aqui</Text>
            
            <MainButton style={styles.loginButton} title='Login'/>

        </View>
    );

}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.mainDark,
        color: 'white',
        alignItems: 'center',
    },

    logo: {
        width: 135,
        height: 135
    },

    simon:{
        width: 80,
        height: 80,
        marginTop: 10
    },
    text:{
        color: '#fff',
        marginTop: 30,
        fontFamily: 'roboto-bold'
    },
    loginButton:{
        marginTop: 40
    }

});

export default LoginScreen;