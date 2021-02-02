import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Colors from '../../constants/colors';
import MainButton from '../../components/MainButton';
import LogoImage from  '../../components/LogoImage';
import Images from '../../constants/images';
import CheckedAccountSimbol from '../../components/CheckedAccountSimbol';

const VerifiedAccountScreen = props => {
    return(
        <View style={styles.body}>
            <LogoImage style={styles.logo}/>
            <CheckedAccountSimbol style={styles.check}/>
            <Text style={styles.text}>Sua conta acaba de ser verificada pelo administrador</Text>
            <Image source={Images.simonOlhosBrilhando.uri} style={styles.image}/>
            <MainButton style={styles.button} title="Perfil"/>
        </View>
    );
};

const styles = StyleSheet.create({
    logo:{
        position:'absolute',
        marginTop: 100
    },
    body:{
        backgroundColor: Colors.mainDark,
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 100
    },
    text:{
        color: 'white',
        fontFamily: 'roboto-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 90,
        marginHorizontal: 30
    },
    image:{
        width: 155,
        height: 146,
        marginTop: 80
    },
    button:{
        marginTop: 80,
        width:160
    },
    check:{
        marginTop: 90,
        marginLeft: 100
    }
});

export default VerifiedAccountScreen;

