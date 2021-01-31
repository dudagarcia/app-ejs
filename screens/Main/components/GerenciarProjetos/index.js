import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from '../../../../constants/colors';
import { MainButton, Tabs } from '../../../../components';
import { Arquivados, Ativos, CardProjeto } from './components';

const GerenciarProjetos = () => {

  const projetos = [
    {
      id: 1,
      nome: 'Doula',
      ativo: true
    },
    {
      id: 2,
      nome: 'Estoq',
      ativo: true
    },
    {
      id: 3,
      nome: 'Restaurante',
      ativo: true
    },
    {
      id: 4,
      nome: 'Ecommerce',
      ativo: true
    },
    {
      id: 5,
      nome: 'Dominar o Mundo',
      ativo: false
    },
    {
      id: 6,
      nome: 'Implantar o Ecossocialismo',
      ativo: false
    },
    {
      id: 7,
      nome: 'Vazar o novo álbum da Riri',
      ativo: false
    },
  ]

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gerenciar Projetos</Text>
      </View>
      <View style={styles.projetosContainer}>
          <Tabs
            header1='Ativos'
            header2='Arquivados'
            content1={<Ativos projetos={projetos.filter(proj=>{return proj.ativo})}/>}
            content2={<Arquivados projetos={projetos.filter(proj=>{return !proj.ativo})}/>}
          />
      </View>
      <View style={styles.buttonContainer}>
        <MainButton/>
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

  projetosContainer: {
    marginTop: 12,
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
  },
});

export default GerenciarProjetos;