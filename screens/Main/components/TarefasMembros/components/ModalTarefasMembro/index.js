import React from "react";
import { useEffect } from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import { getMyTasks } from "../../../../../../services/task";

const ModalTarefasMembro = ({ user, visible, setVisible }) => {

  const searchTasksMembro = async () => {
    const response = await getMyTasks({ userId: user.id });
    console.log(response);
  };

  useEffect(()=>{
      searchTasksMembro()
  },[])

  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.newTarefaContainer}></View>
        <Text onPress={()=> setVisible(false)}>AA</Text>
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

  newTarefaContainer: {
    backgroundColor: "#4F7DDF",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
});

export default ModalTarefasMembro;
