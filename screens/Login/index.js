import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Images from '../../constants/images.js';
import Colors from '../../constants/colors.js';
import AsyncStorage from '@react-native-community/async-storage';
import { ClickableText, LogoImage, MainButton, Title, Input } from '../../components';

const LoginScreen = props => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(null);

    async function sendForm(){
        let response = await fetch('http://192.168.0.30:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        let json = await response.json();
        if(json !== 'error'){
            let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
            let resData = await AsyncStorage.getItem('userData');
            console.log(JSON.parse(resData)); 
            props.navigation.navigate({ routeName: 'Main'});
        }
        else await AsyncStorage.clear();
    }

    return (

        <View style={styles.body}>
            <LogoImage/>
            
            <Title>Bem-Vindx Tarefas Jr.</Title>
            
            <Image 
                style={styles.simon}
                source={Images.simonSmile.uri}/>
            <Input
                image={Images.email.uri} 
                password={false}
                placeholder='Email Corporativo'
                onChangeText={text => setEmail(text)}
            />
 
            <Input 
                image={Images.cadeado.uri} 
                placeholder='Senha'
                password={true}
                onChangeText={text => setPassword(text)}
            />

            <Text style={styles.text}>Esqueceu a senha? Clique 
                <Text  
                    onPress={() => { props.navigation.navigate({ routeName: 'Account'}); }} 
                    style={styles.clickableText}
                > aqui
                </Text>
            </Text>
            
            <MainButton style={styles.loginButton} title='Login' onPress={() => sendForm() }/>

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
    clickableText:{
        marginTop: 2,
        color: Colors.lighterBlue
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