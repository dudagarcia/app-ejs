import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlueTitle, InputProfile, BlueButton, MultiplePicker, SingularPicker } from '../../../../../../components';

const AdicionarSetor = () => {
    return (
        <View style={styles.view}>
            <InputProfile text="Nome do setor" style={styles.input}/>
            <SingularPicker placeholder="Selecionar Diretor"/>
            <BlueButton style={styles.button} title="Salvar"/>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        marginTop: 20
    },
    title:{
        marginBottom:85
    },
    view:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:100
    },
    input:{
        marginTop: 25
    },
    button:{
        marginTop: 400,
        position:'absolute'
    }    
});

export default AdicionarSetor;