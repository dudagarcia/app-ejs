import React from "react";
import { View } from "react-native";
import images from "../../../../../../constants/images";
//import ProfileStyles from "../../constants/constants/ProfileStyles";
import { ImageButton } from "..";

const EditButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <ImageButton
        onPress={() => {
          props.setEditable(true);
        }}
        buttonIconUri={images.editIcon.uri}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "flex-end",
  },
});

export default EditButton;
