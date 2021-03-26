import React from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { CardPerfil } from '../index';


const TodosOsMembros = ({ perfis, loading, openEditScreen }) => {
  return (
    <>
    {
      loading ? (
        <ActivityIndicator color={'red'}/>
      ) : (
      <ScrollView style={styles.container}>
        {perfis?.map((perfil) => {
          return <CardPerfil perfil={perfil} onPress={()=> {openEditScreen(perfil)} }/>;
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
