import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlueTitle, InputProfile, BlueButton, MultiplePicker } from '../../../../components';

const AdicionarSetor = () => {
    return (
        <View style={styles.view}>
            <BlueTitle style={styles.title} title="Adicionar Setor"/>
            <InputProfile text="Nome do setor" style={styles.input}/>
            <MultiplePicker text="Selecionar Diretor"/>
            <BlueButton title="Adicionar"/>
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
        alignItems: 'center'
    },
    input:{
        marginTop: 25
    }
});

export default AdicionarSetor;