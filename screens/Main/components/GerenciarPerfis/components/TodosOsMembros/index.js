import React from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { CardPerfil } from '../index';


const TodosOsMembros = (props) => {
  return (
    <>
    {
      props.loading ? (
        <ActivityIndicator color={'red'}/>
      ) : (
      <ScrollView style={styles.container}>
        {props.perfis.map((perfil) => {
          return <CardPerfil perfil={perfil} onPress={()=> {props.openEditScreen(perfil)} }/>;
        })}
      </ScrollView>

      )
    }
    </>
  );
};

const styles = StyleSheet.create({
  container:{
  }
});


export default TodosOsMembros;
