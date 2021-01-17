import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LogoImage from "../components/LogoImage";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import Images from "../constants/images";
import Title from "../components/Title.js";

const AlteredPasswordScreen = (props) => {
  return (
    <View style={styles.body}>
      <View style={styles.logo}>
        <LogoImage />
      </View>
      <Title style={styles.text}>Sua senha foi alterada com sucesso!</Title>
      <Image style={styles.image} source={Images.simonAmazed.uri} />
      <MainButton 
        style={styles.button} 
        title="Fazer login com a nova senha" 
        onPress={() => { props.navigation.navigate({  routeName: 'Login' })}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 155,
    height: 146,
    marginHorizontal: 125,
    marginTop: 10,
  },
  text: {
    marginTop: 50,
    //marginHorizontal: 30,
    width: 356,
    height: 92,

    fontSize: 30,
    fontFamily: "roboto-bold",
    color: "white",
    textAlign: "center",
  },
  logo: {
    width: 138,
    height: 138,
    //marginHorizontal: 135,
    marginTop: 30,
  },
  body: {
    backgroundColor: Colors.mainDark,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 190,
    height: 58,
    marginTop: 35,
    //marginHorizontal: 110,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default AlteredPasswordScreen;
