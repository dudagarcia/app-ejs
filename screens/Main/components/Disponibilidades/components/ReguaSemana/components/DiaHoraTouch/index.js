import React from "react";
import { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const DiaHoraTouch = ({ day, hour }) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={selected ? styles.containerSelected : styles.container}
      onPress={() => {
        setSelected(!selected);
      }}
    ></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 32,
  },
  containerSelected: {
    backgroundColor: "rgba(26, 3, 135, 0.5)",
    height: 20,
    width: 32,
  },
});

export default DiaHoraTouch;
