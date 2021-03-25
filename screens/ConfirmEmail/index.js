import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../../constants/colors';
import Images from '../../constants/images';
import { MainButton, LogoImage, ClickableText } from '../../components';
import { connect } from 'react-redux';
import { updateCode } from '../../services/user';

const ConfirmEmailScreen = props => {
    
    const sendEmail = async () => {
        const user = {
            id: props.id
        }
        const response = await updateCode(user);
        if(response.data.length === 1){
            console.log(response);
            //reloda a pagina
        }
        else{
            console.log("error");
        }
    }

    return(
        <View style={styles.body}>
            <View style={styles.logo}><LogoImage /></View>
            <View style={styles.wrapText}>
                <Text style={styles.title}>Cheque o seu email! </Text>
                <Text style={styles.text2}>Enviamos um código de verificação para você recuperar sua conta </Text>
            </View>
            <Image style={styles.image} source={Images.simonMicrophone.uri}/> 
            <MainButton style={styles.button} title="Recebi o email" onPress={() => {
                props.navigation.navigate({ routeName: 'CodeRecovery' })
            }}/>
            <View style={styles.wrapText}> 
                <Text style={styles.text}>Não recebeu o email de recuperação? </Text>
                <Text style={styles.text}>Cheque sua caixa de SPAM ou 
                    <TouchableOpacity onPress={() => { sendEmail(); }}>
                        <Text style={styles.clickableText}> clique aqui para reenviar o email</Text>
                    </TouchableOpacity>
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
    clickableText:{
        marginTop: 2,
        color: Colors.lighterBlue
    }, 
    wrapText:{
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25
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

const mapStateToProps = state => ({
    id: state.user.id
})

export default connect(mapStateToProps)(ConfirmEmailScreen);