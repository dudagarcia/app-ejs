import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputProfile, BlueTitle, BlueButton } from "../../../../components";
import colors from "../../../../constants/colors";

const AdicionarPerfil = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <BlueTitle title="Adicionar Perfil" />
      </View>
      <InputProfile text="E-mail" style={styles.input} />
      <InputProfile text="Senha" style={styles.input} />
      <View style={styles.buttonContainer}>
        <BlueButton title="Adicionar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 90,
  },
  input: {
    marginTop: 20,
  },
  
  buttonContainer: {
    position: 'absolute',
    marginTop: 515,
    display: 'flex',
    alignSelf: 'center'
},
});

export default AdicionarPerfil;
