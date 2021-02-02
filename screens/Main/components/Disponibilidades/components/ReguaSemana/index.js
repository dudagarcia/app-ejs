import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DiaHoraTouch } from "./components";

const ReguaSemana = ({ day }) => {
  return (
    <View>
      <Text style={styles.title}>{String(day).substring(0, 1)}</Text>
      <View style={styles.container}>
        <DiaHoraTouch day={day} hour={"08:00"} />
        <DiaHoraTouch day={day} hour={"08:30"} />
        <DiaHoraTouch day={day} hour={"09:00"} />
        <DiaHoraTouch day={day} hour={"09:30"} />
        <DiaHoraTouch day={day} hour={"10:00"} />
        <DiaHoraTouch day={day} hour={"10:30"} />
        <DiaHoraTouch day={day} hour={"11:00"} />
        <DiaHoraTouch day={day} hour={"11:30"} />
        <DiaHoraTouch day={day} hour={"12:00"} />
        <DiaHoraTouch day={day} hour={"12:30"} />
        <DiaHoraTouch day={day} hour={"13:00"} />
        <DiaHoraTouch day={day} hour={"13:30"} />
        <DiaHoraTouch day={day} hour={"14:00"} />
        <DiaHoraTouch day={day} hour={"14:30"} />
        <DiaHoraTouch day={day} hour={"15:00"} />
        <DiaHoraTouch day={day} hour={"15:30"} />
        <DiaHoraTouch day={day} hour={"16:00"} />
        <DiaHoraTouch day={day} hour={"16:30"} />
        <DiaHoraTouch day={day} hour={"17:00"} />
        <DiaHoraTouch day={day} hour={"17:30"} />
        <DiaHoraTouch day={day} hour={"18:00"} />
        <DiaHoraTouch day={day} hour={"18:30"} />
        <DiaHoraTouch day={day} hour={"19:00"} />
        <DiaHoraTouch day={day} hour={"19:30"} />
        <DiaHoraTouch day={day} hour={"20:00"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#4F7DDF",
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginHorizontal: 5,
    borderRadius: 25,
  },
});

export default ReguaSemana;
