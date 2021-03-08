import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Colors from '../../constants/colors';
import MainButton from '../../components/MainButton';
import LogoImage from  '../../components/LogoImage';
import Images from '../../constants/images';
import CheckedAccountSimbol from '../../components/CheckedAccountSimbol';
import { onSignOut } from '../../services/auth';

const LeaveAccountScreen = props => {
    return(
        <View style={styles.body}>
            <LogoImage style={styles.logo}/>
            <CheckedAccountSimbol style={styles.check}/>
            <Text style={styles.text}>Tem certeza que deseja sair de sua conta?</Text>
            <Image source={Images.simonBye.uri} style={styles.image}/>
            <MainButton onPress={() => { 
                onSignOut();
                props.navigation.navigate({ routeName: "Login"});
            }} style={styles.button} title="Sair"/>
            <TouchableOpacity onPress={ () => {
                props.navigation.goBack();
            }} style={styles.goBack}>
                <Text style={styles.text}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    logo:{
        position:'absolute',
        marginTop: 100
    },
    goBack: {
        width: 120,
        marginTop: 40,
        height: 20
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
        marginTop: 100,
        marginHorizontal: 30
    },
    image:{
        width: 199,
        height: 146,
        marginTop: 80
    },
    button:{
        marginTop: 80,
        marginBottom: -80,
        width:160
    },
    check:{
        marginTop: 90,
        marginLeft: 100
    }
});

export default LeaveAccountScreen;

