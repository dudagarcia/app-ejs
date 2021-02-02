import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import AdicionarSetor from "../AdicionarSetor";
import GerenciarPerfis from "../GerenciarPerfis";
import { MinhasTarefas, AdicionarPerfil, GerenciarProjetos } from "../index";

const BackContent = ({ smallMenuDisplay, itemName }) => {
  const [content, setContent] = useState();

  const displayContent = () => {
    switch (itemName) {
      case "Tarefas":
        setContent(<MinhasTarefas buttonDisplay={smallMenuDisplay} />);
        break;

      case "Adicionar Perfil":
        setContent(<AdicionarPerfil />);
        break;

      case "Gerenciar Projetos":
        setContent(<GerenciarProjetos />);
        break;

      case "Adicionar Setor":
        setContent(<AdicionarSetor />);
        break;

      case "Gerenciar Perfis":
        setContent(<GerenciarPerfis />);
        break;

      case "Gerenciar Projetos":
        setContent(<GerenciarProjetos />);
        break;

      default:
        setContent(<View />);
        break;
    }
  };

  useEffect(() => {
    displayContent();
  }, [itemName]);

  return (
    <View style={styles.backContent}>
      <View style={styles.backContentBackground}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  backContent: {
    position: "absolute",
  },

  backContentBackground: {
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    elevation: 8,
    backgroundColor: "#fff",
    height: 600,
    width: 395,
    marginLeft: -10,
    marginTop: 60,
    paddingBottom: 50,
    paddingLeft: 75,
    paddingTop: 50,
  },
});

export default BackContent;
