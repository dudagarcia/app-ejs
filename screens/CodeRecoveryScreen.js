import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MainButton from '../components/MainButton';
import Title from '../components/Title';
import LogoImage from  '../components/LogoImage';
import Colors from '../constants/colors';
import EmailCode from '../components/EmailCode';
import CodeFeedback from '../components/CodeFeedback';
import Images from '../constants/images';

const CodeRecoveryScreen = props => {
    
    var randomNumber = Math.floor(Math.random() * 999999) + 100000;
    console.log(randomNumber);

    function checkCode(check){  
        if(check){
            /*<View style={styles.body_correct}> 
                <Text style={styles.text_codeFeedback}>Código correto!</Text>
                <Image style={styles.image_codeFeedback} source={Images.simonSmile.uri}/>
            </View>*/
            <CodeFeedback correct={true}/>
            setTimeout(() => {  props.navigation.navigate({ routeName: 'ResetPassword' }) }, 2000);
        }
        if(!check){
            <CodeFeedback correct={false}/>
        }
        
    }
    
    return(
        <View style={styles.body}>
            <LogoImage style={styles.logo}/>
            <Title style={styles.text}> Digite o código enviado </Title>
            <EmailCode />
            <MainButton style={styles.button} onPress={ () => checkCode(true) } title="Verificar"/>
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
    },
    body_correct:{
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 14,
        width: 280,
        height: 45,
        backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 120
    },
    body_incorrect:{
        backgroundColor: 'red'
    },
    text_codeFeedback:{
        fontFamily: 'roboto-bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 26
    },
    image_codeFeedback:{
        width: 85,
        height: 94,
        marginTop: 20
    }
});

export default CodeRecoveryScreen;
