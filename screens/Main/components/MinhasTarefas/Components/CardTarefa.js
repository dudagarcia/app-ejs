import moment from "moment";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { toggleDone } from "../../../../../services/task";
import { colors, images } from "../../../../../constants";
import { set } from "react-native-reanimated";
import ModalExibirTarefas from "./ModalExibirTarefa";
import { useState } from "react";

const CardTarefa = ({ task, reload, setReload }) => {
  const [modalExibir, setModalExibir] = useState(false);

  const handlePress = async () => {
    const response = await toggleDone({ id: task.id, done: !task.done });
    console.log(response);
    setReload(!reload);
  };

  const openModalExibirTask = () => {
    setModalExibir(true);
  };

  const mes = {
    0: "Jan",
    1: "Fev",
    2: "Mar",
    3: "Abr",
    4: "Mai",
    5: "Jun",
    6: "Jul",
    7: "Ago",
    8: "Set",
    9: "Out",
    10: "Nov",
    11: "Dez",
  };

  return (
    <>
      <ModalExibirTarefas
        open={modalExibir}
        setOpen={setModalExibir}
        task={task}
        reload={reload}
        setReload={setReload}
      />

      <View style={task.done ? styles.containerDone : styles.container}>
        {!task.done ? (
          <RadioButton
            status={task.done ? "checked" : "unchecked"}
            color={colors.mainDark}
            onPress={handlePress}
          />
        ) : (
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={images.disponibilidadeIcon.uri}
              style={styles.check}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.dateContainer}
          onPress={openModalExibirTask}
        >
          <Text style={task.done ? styles.nameDone : styles.name}>
            {task.name}
          </Text>
          {!task.done && task.date !== new Date("0000-00-00") && (
            <Text style={styles.date}>
              dia {moment(task.date).date()}, {mes[moment(task.date).month()]}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    marginVertical: 11,
  },
  containerDone: {
    flexDirection: "row",
    height: 40,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  name: {
    color: colors.mainDark,
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,
  },
  nameDone: {
    color: colors.mainDark,
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,
    textDecorationLine: "line-through",
  },
  dateContainer: {},
  date: {
    color: colors.mainDark,
    backgroundColor: colors.softBlue,
    borderRadius: 20,
    padding: 7,
  },

  check: {
    width: 18,
    height: 18,
  },
});

export default CardTarefa;
