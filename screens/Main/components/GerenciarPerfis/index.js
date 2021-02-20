import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from '../../../../constants/colors';
import { Tabs, BlueButton } from '../../../../components';
import { MeuSetor, TodosOsMembros, AdicionarPerfil } from './components';
import { perfis } from '../../../../constants';


const GerenciarPerfis = () => {

  const [addProfile, setAddProfile] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gerenciar Perfis</Text>
      </View>
      {
        !addProfile ? (
          <>
            <View style={styles.membrosContainer}>
              <Tabs
                header1='Meu Setor'
                header2='Todos os Membros'
                content1={<MeuSetor perfis={perfis}/>}
                content2={<TodosOsMembros perfis={perfis}/>}
              />
            </View>
            <BlueButton style={styles.button} title="Adicionar Perfil" onPress={() => {setAddProfile(true)}}/>
          </>
        ) : (
          <>
            <View>
              <AdicionarPerfil />
            </View>
          </>
        )
      }
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
  button:{
    marginTop: 30,
    marginBottom: -70
  }
});

export default GerenciarPerfis;
