import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Tabs } from "../../../../components";
import { colors } from "../../../../constants";
import { TarefasMeuSetor, TarefasTodosMembros } from "./components";

const TarefasMembros = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tarefas Membros</Text>
      </View>
        <Tabs
            header1='Meu Setor'
            header2='Todos os Membros'
            content1={<TarefasMeuSetor/>}
            content2={<TarefasTodosMembros/>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    },
  
    titleContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 20
    },
  
    title: {
      color: colors.mainDark,
      fontWeight: "bold",
      fontSize: 20,
    },
});

export default TarefasMembros;
