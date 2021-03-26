import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated
} from "react-native";
import { colors, images } from "../../../../../constants";
import CardTarefa from "./CardTarefa";

const Tarefas = ({ tasks, reload, setReload, admin }) => {
  
  const [arrowRotation, setArrowRotation] = useState(new Animated.Value(0));
  const [tarefasDone, setTarefasDone] = useState(tasks.filter((t)=> {return t.done}))
  const [tarefasNotDone, setTarefasNotDone] = useState(tasks.filter((t)=> {return !t.done}))
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    rotateArrow()
    setVisible(!visible)
  }

  const rotateArrow = () => {
    Animated.timing(
      arrowRotation,
      {
        toValue: visible ? 0 : 1,
        duration: 300,
        useNativeDriver: true
      }
    ).start()
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        {
          tarefasNotDone &&
            tarefasNotDone.map((task) => {
            return <CardTarefa task={task} reload={reload} setReload={setReload}/>;
        })}
      </View>
      <View style={styles.concluidasContainer}>
        <TouchableOpacity style={styles.concluidasHeader} onPress={toggleVisibility}>
          <Text style={styles.concluidas}> Concluídas </Text>
          <Animated.Image 
            source={images.arrowDown.uri} 
            style={{...styles.arrowDown,...{transform:[{
              rotate: arrowRotation.interpolate({
                inputRange: [0,1],
                outputRange:['0deg','180deg']
            }) }]}}}/>
        </TouchableOpacity>

          <View
            style={{...styles.concluidas,...{display: visible ? 'flex' : 'none'}}} 
          >
          {
            tarefasDone &&
              tarefasDone.map((task) => {
              return <CardTarefa task={task} reload={reload} setReload={setReload} />;
          })}
          </View>
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

  concluidasHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    marginBottom: 10
  },

  concluidas: {
    color: colors.mainDark,
    fontWeight: "bold",
    fontSize: 18,
  },

  arrowDown: {
    width: 18,
    height: 10,
  },


});

export default Tarefas;
