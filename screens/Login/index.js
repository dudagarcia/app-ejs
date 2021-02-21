import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { colors, images} from '../../constants';
import { LogoImage, Title, Input } from '../../components';
import { loginUser } from '../../services/user';
import { onSignIn } from '../../services/auth';
import LoginButton from './components/LoginButton';

const LoginScreen = props => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const sendForm = async () =>{
        setLoading(true);
        const userLoginInfo = {
            email: email,
            password: password
        }
        const response = await loginUser(userLoginInfo);
        
        if(response.data.length === 1){
            props.navigation.navigate('Main');
            onSignIn(response.data[0].id);

        }else {
            setError(true)
        }

        setLoading(false);
    }

    return (

        <View style={styles.body}>
            <LogoImage/>
            
            <Title>Bem-Vindx ao Tarefas Jr.</Title>
            
            <Image 
                style={styles.simon}
                source={images.simonSmile.uri}/>
            <Input
                image={images.email.uri} 
                password={false}
                placeholder='Email Corporativo'
                onChangeText={text => setEmail(text)}
            />
 
            <Input 
                image={images.cadeado.uri} 
                placeholder='Senha'
                password={true}
                onChangeText={text => setPassword(text)}
            />

            {
                error && (
                    <Text> Email e/ou senha incorretos!</Text>
                )
            }

            <Text style={styles.text}>Esqueceu a senha? Clique 
                <Text  
                    onPress={() => { props.navigation.navigate('Account'); }} 
                    style={styles.clickableText}
                > aqui
                </Text>
            </Text>
            
            <LoginButton style={styles.loginButton} onPress={() => sendForm() }>
                    {
                        loading ? 
                        (
                            <ActivityIndicator color={colors.mainDark} size={20}/>
                        ):(
                            <Text style={styles.buttonText}>Login</Text>
                        )
                    }

            </LoginButton>

        </View>
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.mainDark,
        color: 'white',
        alignItems: 'center',
    },
    clickableText:{
        marginTop: 2,
        color: colors.lighterBlue
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
    },
    buttonText: {
        color: colors.mainDark,
        fontWeight: "bold",
        fontSize: 17
    }

});


export default LoginScreen;