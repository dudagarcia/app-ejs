import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InputProfile, BlueTitle, BlueButton } from '../../../../components';
import colors from '../../../../constants/colors';


const AdicionarPerfil = props => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
            <BlueTitle title='Adicionar Perfil'/>
        </View>
        <InputProfile text="E-mail" style={styles.input}/>
        <InputProfile text="Senha" style={styles.input}/>
        <BlueButton title="Adicionar"/>
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
    }
});

export default AdicionarPerfil;