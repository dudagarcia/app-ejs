import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { colors, screenSize } from "../../../../constants";
import { Tabs } from "../../../../components";
import {
  ButtonConfig,
  MeuSetor,
  ModalCadastrarDisponibilidade,
  TodosOsMembros,
} from "./components";

import { BlueButton } from "../../../../components";
import { connect } from 'react-redux'; 

const Disponibilidades = (props) => {
  const [modalVerificarOpen, setModalVerificarOpen] = useState(false);
  const [modalCadastrarOpen, setModalCadastrarOpen] = useState(false);


  return (
    <>
      <Modal visible={modalVerificarOpen}>
        <Text>AAA</Text>
      </Modal>

      <ModalCadastrarDisponibilidade
        visible={modalCadastrarOpen}
        closeModal={() => {
          setModalCadastrarOpen(false);
        }}
      />

      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Disponibilidades</Text>
        </View>
        <View style={styles.membrosContainer}>
          <Tabs
            header1="Meu Setor"
            header2="Todos os Membros"
            content1={
              <MeuSetor
                perfis={props.users.mySection}
              />
            }
            content2={<TodosOsMembros perfis={props.users.allUsers} />}
          />
        </View>
        <View style={styles.buttonContainer}>
          <BlueButton onPress={() => {}}>
            {<Text style={styles.buttonText}>Conferir</Text>}
          </BlueButton>
          <ButtonConfig
            onPress={() => {
              setModalCadastrarOpen(true);
            }}
          />
        </View>
      </View>
    </>
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
  buttonContainer: {
    position: "absolute",
    marginTop: screenSize.height * 0.7,
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "roboto-bold",
    fontWeight: "700",
    fontSize: 18,
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(Disponibilidades);
