import moment from "moment";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { toggleDone } from "../../../../../services/task";
import { colors } from "../../../../../constants";

const CardTarefa = ({ task, reload, setReload }) => {

  const handlePress = async () => {
    const response = await toggleDone({ id: task.id, done: !task.done});
    console.log(response)
    setReload(!reload)
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
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <RadioButton
        status={task.done ? "checked" : "unchecked"}
        color={colors.mainDark}
      />
      <View style={styles.dateContainer}>
        <Text style={styles.name}>{task.name}</Text>
        {task.date && (
          <Text style={styles.date}>
            dia {moment(task.date).date()}, {mes[moment(task.date).month()]}
          </Text>
        )}
      </View>
    </TouchableOpacity>
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
  name: {
    color: colors.mainDark,
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,
  },
  dateContainer: {},
  date: {
    color: colors.mainDark,
    backgroundColor: colors.softBlue,
    borderRadius: 20,
    padding: 7,
  },
});

export default (CardTarefa);
