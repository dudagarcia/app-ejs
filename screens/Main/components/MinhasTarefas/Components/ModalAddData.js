import React, { useState, useEffect } from "react";
import { View, StyleSheet, Modal, Text, ScrollView, TextInput } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import { TextButton } from "../../../../../components";
import { colors } from "../../../../../constants";

const ModalAddData = ({ setVisible, visible, setDay, day, hour, setHour }) => {
  const [markedDate, setMarkedDate] = useState({ [day]: { selected: true, selectedColor: "blue" }, });

  useEffect(() => {
    setMarkedDate({ [day]: { selected: true, selectedColor: colors.mainDark } });
  }, [day]);

  console.log(hour)

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.addDataContainer}>
            <View style={styles.concluirContainer}>
              <TextButton title="Concluir" onPress={() => setVisible(false)} />
            </View>

          <ScrollView>
            <View style={styles.calendarContainer}>
              <Text style={styles.title}>Data</Text>
              <CalendarList
                horizontal={true}
                style={styles.calendar}
                markedDates={markedDate}
                theme={{
                  calendarBackground: "transparent",
                  monthTextColor: "rgba(255, 255, 255, 0.7)",
                  dayTextColor: "rgba(255, 255, 255, 0.7)",
                  arrowColor: "rgba(255, 255, 255, 0.7)",
                  selectedDayTextColor: "#fff",
                }}
                onDayPress={(day) => {
                  const { dateString } = day;
                  console.log(dateString)
                  setDay(dateString);
                }}
              />
            </View>

            <View>
              <Text style={styles.title}>Hora</Text>
              <View style={styles.horaContainer}>
                  <TextInput 
                    style={styles.inputHora}
                    keyboardType='number-pad'
                    maxLength={2}
                    defaultValue=""
                    onChangeText={(value)=>{
                        var auxHora = hour;
                        auxHora[0] = value;
                        setHour(auxHora);
                    }}
                 />
                 <Text style={styles.twoPoints}>:</Text>
                   <TextInput 
                    style={styles.inputHora}
                    keyboardType='number-pad'
                    maxLength={2}
                    defaultValue=""
                    onChangeText={(value)=>{
                        var auxHora = hour;
                        auxHora[1] = value;
                        setHour(auxHora);
                    }}
                 />
              </View>
            </View>

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
    maxHeight: 500
  },

  calendarContainer: {
    height: 400,
    width: "80%",
  },

  concluirContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 20,
  },

  title: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 19,
  },

  calendar: {
    width: 350,
  },

  inputHora: {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      width: 60,
      padding: 15,
      borderRadius: 15,
      borderColor: 'transparent',
      fontSize: 25,
      color: colors.mainDark,
      textAlign: 'center'
  },

  horaContainer: {
      flexDirection: 'row',
      justifyContent: 'center'
  },

  twoPoints: {
      color: colors.mainDark,
      fontSize: 50,
      fontWeight: "bold",
      marginHorizontal: 7
  }
});

export default React.memo(ModalAddData);
