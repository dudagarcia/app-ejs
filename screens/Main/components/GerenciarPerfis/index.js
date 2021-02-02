import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from '../../../../constants/colors';
import { Tabs } from '../../../../components';
import { MeuSetor, TodosOsMembros} from './components';
import { perfis } from '../../../../constants';


const GerenciarPerfis = () => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gerenciar Perfis</Text>
      </View>
      <View style={styles.membrosContainer}>
          <Tabs
            header1='Meu Setor'
            header2='Todos os Membros'
            content1={<MeuSetor perfis={perfis}/>}
            content2={<TodosOsMembros perfis={perfis}/>}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  title: {
    color: colors.mainDark,
    fontWeight: "bold",
    fontSize: 20,
  },

  membrosContainer: {
    marginTop: 12,
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
  },
});

export default GerenciarPerfis;
