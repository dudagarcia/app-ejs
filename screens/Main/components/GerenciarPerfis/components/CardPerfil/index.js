import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { colors, images } from '../../../../../../constants';


const CardPerfil = ({ perfil, onPress }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress()}>
      <Image source={images.logo.uri} style={styles.image} />
      <Text style={styles.name}>{perfil.name || perfil.email}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 33,
    height: 33,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.lighterBlue,
  },
  container: {
    flexDirection: "row",
    height: 40,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
  },
  name: {
    color: colors.mainDark,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default CardPerfil;
