import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { colors, images} from '../../constants';
import { LogoImage, Title, Input } from '../../components';
import { loginUser } from '../../services/user';
import { isSignedIn, onSignIn } from '../../services/auth';
import LoginButton from './components/LoginButton';
import { searchUserById } from '../../services/user';
import { useDispatch } from 'react-redux';
import * as ActionTypes from '../../redux/actions/actions';

const LoginScreen = props => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const searchLoggedUser = async () => {
          const userId = await isSignedIn();
          const { data } = await searchUserById({ id: userId});
          dispatch({ type: ActionTypes.ADD_USER, payload: data[0]});
    }
    
    const sendForm = async () =>{
        setLoading(true);
        const userLoginInfo = {
            email: email,
            password: password
        }
        const response = await loginUser(userLoginInfo);
        console.log(response)

        if(response.data.length === 1){
            onSignIn(response.data[0].id);
            setError(false)
            searchLoggedUser();
            props.navigation.navigate('Main');

        }else {
            console.log("eerrooo")
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
                    <Text style={styles.error}> Email e/ou senha incorretos!</Text>
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
        color: colors.lighterBlue,
        fontSize: 15
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
    },
    error:{
        color: 'white'
    }

});


export default LoginScreen;