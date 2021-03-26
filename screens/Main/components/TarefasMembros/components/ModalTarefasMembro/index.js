import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Modal, View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { TextButton } from "../../../../../../components";
import { getMyTasks } from "../../../../../../services/task";
import Tarefas from "../../../MinhasTarefas/Components/Tarefas";

const ModalTarefasMembro = ({ user, visible, setVisible }) => {

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false);

  const searchTasksMembro = async () => {
    setLoading(true)
    const { data } = await getMyTasks({ userId: user.id });
    setTasks(data);
    setLoading(false)
  };

  useEffect(()=>{
      searchTasksMembro()
  },[user])

  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.newTarefaContainer}>
          <View style={styles.buttonContainer}>
            <TextButton
              title="Voltar"
              onPress={()=> setVisible(false)}
            />
          </View>
        {
          loading ?
            <ActivityIndicator color="white"/>
          :
          tasks.length === 0 ?
            <Text style={styles.title}>Membro ainda não possui tarefas!</Text>
          :
            <Tarefas tasks={tasks}/>
        }
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

  newTarefaContainer: {
    backgroundColor: "#4F7DDF",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  buttonContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  
  title: {
    color: 'rgba(255, 255, 255, 0.56)',
    fontSize: 18
}
});

export default ModalTarefasMembro;
