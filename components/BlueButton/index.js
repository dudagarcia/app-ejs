import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";

const BlueButton = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.button}
        onPress={props.onPress}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 67,
    backgroundColor: colors.mainDark,
    width: 174,
    height: 59,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default BlueButton;
