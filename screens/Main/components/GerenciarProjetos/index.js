import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import colors from "../../../../constants/colors";
import { Tabs, BlueButton } from "../../../../components";
import {
  AdicionarProjeto,
  Arquivados,
  Ativos,
  CardProjeto,
} from "./components";
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from "react";
import Colors from '../../../../constants/colors';
import { useLinkProps } from "@react-navigation/native";

const GerenciarProjetos = (props) => {
  const [addProject, setAddProject] = useState(false);

  const projetos = [
    {
      id: 1,
      nome: "Dominar o Mundo",
      ativo: false,
    },
    {
      id: 2,
      nome: "Implantar o Ecossocialismo",
      ativo: false,
    },
    {
      id: 3,
      nome: "Vazar o novo álbum da Riri",
      ativo: false,
    },
  ];

  return (
    <View style={styles.mainContainer}>
     
      {!addProject ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Gerenciar Projetos</Text>
          </View>
          <View style={styles.projetosContainer}>
            <Tabs
              header1="Ativos"
              header2="Arquivados"
              content1={
                <Ativos
                  projetos={projetos.filter((proj) => {
                    return proj.ativo;
                  })}
                />
              }
              content2={
                <Arquivados
                  projetos={projetos.filter((proj) => {
                    return !proj.ativo;
                  })}
                />
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <BlueButton
              onPress={() => {
                setAddProject(true);
              }}
            >
              {<Text style={styles.buttonText}>Adicionar Projeto</Text>}
            </BlueButton>
          </View>
        </>
      ) : (
        <>
          <View style={styles.projetosContainer}>
            <AdicionarProjeto setAddProject={setAddProject} />
          </View>
        </>
      )}
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

  buttonContainer: {
    position: "absolute",
    marginTop: 515,
    display: "flex",
    alignSelf: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontFamily: "roboto-bold",
    fontWeight: "700",
    fontSize: 18,
    alignItems: "center",
  },

  icon:{
    marginLeft: -40,
    marginRight: 15,
    color: Colors.mainDark
  }
});

export default GerenciarProjetos;
