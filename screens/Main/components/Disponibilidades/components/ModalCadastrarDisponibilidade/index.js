import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { TextButton } from "../../../../../../components";
import { ReguaHorarios, ReguaSemana } from "../index";

const ModalCadastrarDisponibilidade = ({ closeModal, modal, visible }) => {
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.cancelarContainer}>
            <TextButton title="Cancelar" onPress={closeModal} />
          </View>
          <View style={styles.salvarContainer}>
            <TextButton title="Salvar" onPress={closeModal} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Minha Disponibilidade</Text>
          </View>

          <View style={styles.disponibilidadeContainer}>
            <View></View>

            <View style={styles.daysContainer}>
              <ReguaHorarios />
              <ReguaSemana day="Segunda" />
              <ReguaSemana day="Terça" />
              <ReguaSemana day="Quarta" />
              <ReguaSemana day="Quinta" />
              <ReguaSemana day="Sexta" />
              <ReguaSemana day="Sábado" />
              <ReguaSemana day="Domingo" />
              <ReguaHorarios />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "rgba(28, 28, 28, 0.6)",
  },

  mainContainer: {
    backgroundColor: "#4F7DDF",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },

  salvarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  cancelarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
    marginTop: 10
  },

  titleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  title: {
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "bold",
    fontSize: 18,
  },

  daysContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  disponibilidadeContainer: {
    marginTop: 20,
  },
});

export default ModalCadastrarDisponibilidade;
