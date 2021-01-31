import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { InputProfile, BlueTitle } from '../../../../components';
import colors from '../../../../constants/colors';


const AdicionarPerfil = props => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
            <BlueTitle title='Adicionar Perfil'/>
        </View>
        <InputProfile text="E-mail" style={styles.input}/>
        <InputProfile text="Senha" style={styles.input}/>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={.4} style={styles.button}> 
                <Text style={styles.text}> Adicionar </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 90
    },
    input:{
        marginTop: 20
    }, 
    button:{
        borderRadius: 67,
        backgroundColor: colors.mainDark,
        width: 174,
        height: 59,
        marginTop: 225,
        marginRight: 5,
        
    },
    text:{
        color: 'white', 
        fontFamily: 'roboto-bold', 
        fontWeight: "700",
        fontSize: 18,
        alignItems: 'center',
        marginLeft: 40,
        marginTop: 15
    }
});

export default AdicionarPerfil;