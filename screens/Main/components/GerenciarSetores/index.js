import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { BlueButton, BlueTitle, InputProfile } from "../../../../components";
import { AdicionarSetor, CardSetor } from "./components";
import { CardPerfil } from "../GerenciarPerfis/components";
import { connect } from "react-redux";

const GerenciarSetores = (props) => {
  const [addSetor, setAddSetor] = useState(false);

  return (
    <View style={styles.body}>
      {!addSetor ? (
        <>
          <BlueTitle style={styles.title} title="Gerenciar Setores" />
          <View style={styles.container}>
            <ScrollView style={styles.listContainer}>
              {props.sections.map((setor) => {
                return <CardPerfil perfil={setor} />;
              })}
            </ScrollView>
            <View style={styles.buttonContainer}>
              <BlueButton
                onPress={() => {
                  setAddSetor(true);
                }}
              >
                {<Text style={styles.buttonText}>Novo Setor</Text>}
              </BlueButton>
            </View>
          </View>
        </>
      ) : (
        <>
          <View>
            <AdicionarSetor setAddSetor={setAddSetor} />
          </View>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  sections: state.sections,
});

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  buttonContainer: {
    position: "absolute",
    marginTop: 500,
    display: "flex",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "roboto-bold",
    fontWeight: "700",
    fontSize: 18,
    alignItems: "center",
  },
  listContainer: {
    marginTop: 70,
  },
});

export default connect(mapStateToProps)(GerenciarSetores);
