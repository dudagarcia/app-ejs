import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { BlueButton, BlueTitle, InputProfile } from '../../../../components';
import { AdicionarSetor } from './components';
import { CardPerfil } from '../GerenciarPerfis/components';

const GerenciarSetores = props => {
    const [addSetor, setAddSetor] = useState(false);

    const setores = [
        {
            id: 1,  nome: 'PROJETOS'
        },
        {
            id: 2,  nome: 'MARKETING'
        },
        {
            id: 3,  nome: 'FINANÇAS E PESSOAS'
        },
        {
            id: 4,  nome: 'VENDAS'
        },
        {
            id: 5,  nome: 'DIRETORIA'
        },
    ]

    return(
        <View style={styles.body}>
            <BlueTitle style={styles.title} title="Gerenciar Setores"/>
            {
                !addSetor ? (
                    <>
                    <View style={styles.container}>
                        <ScrollView style={styles.listContainer}>
                            {   setores.map((setor)=>{  return <CardPerfil perfil={setor}/> })  }
                        </ScrollView>
                        <View style={styles.buttonContainer}>
                            <BlueButton title="Novo Setor" onPress={() => { setAddSetor(true)}}/>
                        </View>
                    </View>
                    </>
                ) : (
                    <>
                    <View>
                        <AdicionarSetor/>
                    </View>
                    </>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    buttonContainer:{
        position: "absolute",
        marginTop: 505,
        display: "flex"
    },
    listContainer:{
        marginTop: 70
    }
});

export default GerenciarSetores;