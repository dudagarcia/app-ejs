import React from "react";
import { View, StyleSheet } from "react-native";
import images from "../../../../../../constants/images";
//import ProfileStyles from "../../constants/ProfileStyles";
import { ImageButton } from "..";
import { BlueButton } from "../../../../../../components";

const ProfileEditButtons = (props) => {
  return (
    <View style={styles.buttonsContainer}>
      <ImageButton
        onPress={() => {
          props.navigation.navigate({ routeName: "LeaveAccount" });
        }}
        buttonIconUri={images.logoutIcon.uri}
      />
      <BlueButton onPress={props.handleUpdateUser}>
        <Text style={styles.mainButtonText}>Salvar</Text>
      </BlueButton>

      <ImageButton
        onPress={() => {
          props.navigation.navigate({ routeName: "DeleteAccount" });
        }}
        buttonIconUri={images.trashcanIcon.uri}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainButtonContainer: {
    width: 174,
    height: 59,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A0387",
    borderRadius: 67,
  },

  mainButtonText: {
    color: "#FFFFFF",
    fontFamily: "roboto-bold",
    fontSize: 18,
    textAlign: "center",
  },

  buttonsContainer: {
    justifyContent: "space-evenly",
  },
});

export default ProfileEditButtons;
