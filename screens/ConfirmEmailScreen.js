import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import LogoImage from '../components/LogoImage';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';
import Images from '../constants/images';
import ClickableText from '../components/ClickableText';

const ConfirmEmailScreen = props => {
    return(
        <View style={styles.body}>
            <View style={styles.logo}><LogoImage /></View>
            <View style={styles.wrapText}>
                <Text style={styles.title}>Cheque o seu email! </Text>
                <Text style={styles.text2}>Enviamos um código de verificação para você recuperar sua conta </Text>
            </View>
            <Image style={styles.image} source={Images.simonMicrophone.uri}/> 
            <MainButton style={styles.button} title="Recebi o email"/>
            <View style={styles.wrapText}> 
                <Text style={styles.text}>Não recebeu o email de recuperação? </Text>
                <Text style={styles.text}>Cheque sua caixa de SPAM ou 
                    <ClickableText title="clique aqui para reenviar o email"/> 
                </Text>
            </View>
        </View>
        

    );
};

const styles = StyleSheet.create({
    text2:{
        fontSize: 22,
        marginHorizontal: 50,
        fontFamily: 'roboto-bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 60
    },
    wrapText:{
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 100,
        height: 100,
        marginLeft: 250,
        marginTop: 50
    },
    title:{
        color: 'white', 
        fontSize: 30,
        fontFamily: 'roboto-bold'
    },  
    text:{
        color: 'white',
        fontFamily: 'roboto-bold',
        textAlign: 'center'
    },
    logo:{
        marginHorizontal: 142,
        marginTop: 30,
    },
    body:{
        backgroundColor: Colors.mainDark,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    button:{
        width: 190,
        height: 58,
        marginTop: 65
    }
});

export default ConfirmEmailScreen;