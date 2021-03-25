import React from "react";
import { Image, TouchableOpacity } from "react-native";

const ImageButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        source={props.buttonIconUri}
        style={{ ...styles.buttonIcon, ...props.buttonStyle }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonIcon: {
    width: 59,
    height: 59,
  },
});

export default ImageButton;
