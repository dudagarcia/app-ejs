import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { CardPerfil } from '../index';


const TodosOsMembros = ({ perfis }) => {
  return (
    <ScrollView style={styles.container}>
      {perfis.map((perfil) => {
        return <CardPerfil perfil={perfil} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
  }
});


export default TodosOsMembros;
