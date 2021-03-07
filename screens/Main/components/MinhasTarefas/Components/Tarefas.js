import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import CardTarefa from "./CardTarefa";

const Tarefas = (props) => {
  const [tarefasDone, setTarefasDone] = useState([]);
  const [tarefasNotDone, setTarefasNotDone] = useState([]);

  const divideTasks = () => {
    props.tasks.map((task) => {
      if (task.done === 1) {
        const aux = tarefasDone;
        aux.push(task);
        setTarefasDone(aux);
      } else {
        console.log(task.done);
        const aux2 = tarefasNotDone;
        aux2.push(task);
        setTarefasNotDone(aux2);
      }
    });
  };

  useEffect(() => {
    divideTasks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        {tarefasNotDone.map((task) => {
          return <CardTarefa task={task} />;
        })}
      </View>
      <View>
        <Text>Concluídas</Text>
        {tarefasDone?.map((task) => {
          return <CardTarefa task={task} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
  },
});

export default Tarefas;
