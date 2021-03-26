import moment from "moment";
import React from "react";
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { TextButton } from "../../../../../components";
import { colors, images } from "../../../../../constants";
import { deleteTask } from '../../../../../services/task';

const ModalExibirTarefas = ({ open, task, setOpen, reload, setReload, users }) => {

  const searchUser = (t) => {
    const user = users.filter(user => user.id === t);
    return (user[0]?.name || user[0]?.email);
  }

  const deleteThisTask = async () => {
        const response = await deleteTask({ id: task.id });
        setOpen(false);
        setReload(!reload);
    }


  return (
    <Modal visible={open} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.container}>

          <View style={styles.buttonContainer}>
            <TextButton
              title="Fechar"
              onPress={() => {
                setOpen(false);
              }}
            />
          </View>

          <Text style={styles.title}>{task.name}</Text>
          <Text style={styles.description}>
            {task.details || "Sem Detalhes"}
          </Text>

          <View style={styles.dateContainer}>
            <Text style={styles.date}>{moment(task.date).isValid() ? moment(task.date).format("DD/MM/YYYY") : "Sem data"}</Text>
            <Text style={styles.date}>{moment(task.date).isValid() ? moment(task.date).format("HH:MM"): "Sem hora"}</Text>
          </View>

          <View style={styles.contributorContainer}>
            {
              task.contributors.split(',').map(x=>+x).map(t =>{
                return <Text style={styles.contributor}>{searchUser(t)}</Text>
              })
            }
          </View>

          <TouchableOpacity style={styles.trashContainer} onPress={deleteThisTask}>
              <Image source={images.trashcanIcon.uri} style={styles.trash} />
          </TouchableOpacity>
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

  container: {
    backgroundColor: colors.lighterBlue,
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },

  title: {
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "bold",
    fontSize: 20,
    borderLeftColor: "rgba(255, 255, 255, 0.7)",
    borderLeftWidth: 3,
    paddingLeft: 15,
  },

  description: {
    marginTop: 15,
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 15,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  date: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
    width: "40%",
    textAlign: "center",
    fontSize: 15,
    color: colors.mainDark,
    fontWeight: "bold"
  },

  dateContainer: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  trash: {
      width: 40,
      height: 40,
      alignSelf: "center"

  },
  trashContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      borderRadius: 100,
      width: 40,
      alignSelf: "center"
  },
  contributorContainer: {

  },
  contributor: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 15,
    margin: 5
  }
});

const mapStateToProps = (state) => ({
  users: state.users.allUsers
});

export default connect(mapStateToProps)(ModalExibirTarefas);
