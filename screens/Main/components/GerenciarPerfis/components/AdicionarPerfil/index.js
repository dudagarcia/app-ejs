import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputProfile, BlueTitle, BlueButton } from "../../../../../../components";

const AdicionarPerfil = props => {
  return (
    <View style={styles.mainContainer}>
      <InputProfile text="E-mail" style={styles.input} />
      <InputProfile text="Senha" style={styles.input} />
      <View style={styles.buttonContainer}>
        <BlueButton title="Adicionar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40
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
    marginTop: 455,
    display: 'flex',
    alignSelf: 'center'
},
});

export default AdicionarPerfil;
