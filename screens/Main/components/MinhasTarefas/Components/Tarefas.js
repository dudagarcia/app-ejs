import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import { set } from "react-native-reanimated";
import { colors } from "../../../../../constants";
import CardTarefa from "./CardTarefa";

const Tarefas = ({ tasks }) => {
  const [tarefasDone, setTarefasDone] = useState(tasks.filter((t)=> {return t.done}))
  const [tarefasNotDone, setTarefasNotDone] = useState(tasks.filter((t)=> {return !t.done}))
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        {
          tarefasNotDone &&
            tarefasNotDone.map((task) => {
            return <CardTarefa task={task} />;
        })}
      </View>
      <View style={styles.concluidasContainer}>
        <Text onPress={toggleVisibility} style={styles.concluidas}>Concluídas</Text>
          <TouchableOpacity 
            style={{...styles.concluidas,...{display: visible ? 'flex' : 'none'}}} 
          >
          {
            tarefasDone &&
              tarefasDone.map((task) => {
              return <CardTarefa task={task} />;
          })}
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    marginTop: 10
  },

  concluidasContainer: {
    borderTopColor: colors.lighterBlue,
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10
  },

  concluidas: {
    color: colors.mainDark,
    fontWeight: "bold",
    fontSize: 18
  }

});

export default Tarefas;
