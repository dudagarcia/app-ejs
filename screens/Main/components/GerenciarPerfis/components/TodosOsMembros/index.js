import React from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { CardPerfil } from '../index';


const TodosOsMembros = ({ perfis, loading, props }) => {
  return (
    <>
    {
      loading ? (
        <ActivityIndicator color={'red'}/>
      ) : (
      <ScrollView style={styles.container}>
        {perfis?.map((perfil) => {
          return <CardPerfil perfil={perfil} onPress={()=> {props?.openEditScreen(perfil)} }/>;
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
