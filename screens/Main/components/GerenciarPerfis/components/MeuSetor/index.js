import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CardPerfil } from '../index';


const MeuSetor = (props) => {

  return (
      <ScrollView style={styles.container}>
          {
            props.perfis?.map((perfil)=>{
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