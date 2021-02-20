import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AdicionarSetor } from "../GerenciarSetores";
import GerenciarPerfis from "../GerenciarPerfis";
import { MinhasTarefas, AdicionarPerfil, GerenciarProjetos, GerenciarSetores, Disponibilidades } from "../index";
import { screenSize } from "../../../../constants";

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

      case "Gerenciar Setores":
        setContent(<GerenciarSetores />);
        break;

      case "Disponibilidades":
        setContent(<Disponibilidades />);
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
    height: screenSize.height * 0.8,
    width: screenSize.width * 0.95,
    marginLeft: -10,
    marginTop: 60,
    paddingBottom: 50,
    paddingLeft: 75,
    paddingTop: 50,
  },
});

export default BackContent;
