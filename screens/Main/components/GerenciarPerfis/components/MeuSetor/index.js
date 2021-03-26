import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CardPerfil } from '../index';


const MeuSetor = ({perfis, props}) => {

  return (
      <ScrollView style={styles.container}>
          {
            perfis?.map((perfil)=>{
              return <CardPerfil perfil={perfil} onPress={()=> {props?.openEditScreen(perfil)} } />;
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