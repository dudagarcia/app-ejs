import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CardPerfil } from '../index';


const MeuSetor = ({perfis}) => {

  return (
      <ScrollView style={styles.container}>
          {
            perfis.map((perfil)=>{
              return <CardPerfil perfil={perfil || {nome: 'teste'}}/>
            })
          }
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
    }
});

export default MeuSetor;