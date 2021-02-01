import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import colors from "../../../../../../constants/colors";
import images from "../../../../../../constants/images";


const CardPerfil = ({ perfil }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={images.logo.uri} style={styles.image} />
      <Text style={styles.name}>{perfil.nome}</Text>
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
