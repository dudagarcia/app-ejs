import React, { useState } from "react";
import { View, Modal, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import CardPerfil from "./CardPerfil";
import { TextButton } from "../../../../../components";

const ModalAddUsers = ({ visible, users, setVisible }) => {
  // State que guarda os usuários selecionados
  const [selectedItens, setSelectedItens] = useState(new Map());

  // Vai adicionando os usuários selecionados em um conjunto
  const selectItem = (perfil) => {
    const aux = selectedItens;
    aux.set(perfil.nome, perfil);
    setSelectedItens(aux);
  };

  // Remove um usuário do conjunto
  const removeItem = (perfil) => {
    const aux = selectedItens;
    aux.delete(perfil.nome);
    setSelectedItens(aux);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.addDataContainer}>
          <View style={styles.concluirContainer}>
            <TextButton title="Concluir" onPress={() => setVisible(false)} />
          </View>
          <ScrollView>
            {users.map((perfil) => {
              return (
                <CardPerfil
                  key={perfil.id}
                  perfil={perfil}
                  onSelect={selectItem}
                  onRemove={removeItem}
                />
              );
            })}
          </ScrollView>
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
  },

  addDataContainer: {
    backgroundColor: "#4F7DDF",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    maxHeight: 500,
  },

  concluirContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 20,
  },
});

const mapStateToProps = (state) => ({
  users: state.users.allUsers,
});

export default connect(mapStateToProps)(ModalAddUsers);
