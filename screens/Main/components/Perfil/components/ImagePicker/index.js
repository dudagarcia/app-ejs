import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
//import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { ImageButton } from "..";

const ImagePickerComponent = (props) => {
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      Alert.alert(
        "Você precisa permitir o acesso a galeria para selecionar uma foto de perfil.",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    return pickImage();
    //ImagePicker.launchImageLibraryAsync();
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      props.setImage(result);
      return true;
    }
    return false;
  };

  return (
    <ImageButton onPress={takeImageHandler} buttonIconUri={props.buttonIcon} />
  );
};

export default ImagePickerComponent;
