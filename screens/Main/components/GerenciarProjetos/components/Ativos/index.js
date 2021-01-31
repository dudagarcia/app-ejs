import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { CardProjeto } from "../index";

const Ativos = ({ projetos }) => {
  return (
    <ScrollView style={styles.container}>
      {projetos.map((projeto) => {
        return <CardProjeto projeto={projeto} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Ativos;
