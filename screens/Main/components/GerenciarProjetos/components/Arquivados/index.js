import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { CardProjeto } from '../index';

// import { Container } from './styles';

const Arquivados = ({projetos}) => {
  return (
    <ScrollView style={styles.container}>
    {
      projetos.map((projeto)=>{
        return <CardProjeto projeto={projeto}/>
      })
    }
</ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
    }
});


export default Arquivados;