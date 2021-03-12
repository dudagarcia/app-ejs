import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useState } from "react";
import Colors from "../../constants/colors";
import Images from "../../constants/images";
import { MainButton, LogoImage, EmailCode, Title } from "../../components";

const CodeRecoveryScreen = (props) => {
  const [content, setContent] = useState(
    <Title style={styles.text}> Digite o código enviado </Title>
  );

  const [correct, setCorrect] = useState(false);

  var randomNumber = Math.floor(Math.random() * 999999) + 100000;
  console.log(randomNumber);

  const setResponse = (correct) => {
    if (correct > 0) {
      setContent(
        <View style={styles.bodyCorrect}>
          <Text style={styles.textCodeFeedback}>Código correto!</Text>
          <Image
            style={styles.imageCodeFeedback}
            source={Images.simonSmile.uri}
          />
        </View>
      );
    } else {
      setContent(
        <View style={{ ...styles.bodyCorrect, ...styles.bodyIncorrect }}>
          <Text style={styles.textCodeFeedback}>Código incorreto!</Text>
          <Image
            style={styles.imageCodeFeedback}
            source={Images.simonIrritado.uri}
          />
        </View>
      );
    }
  };

  const checkCode = (check) => {
    console.log(check);
    setResponse(check);
    if (check > 0) {
      setTimeout(() => {
        props.navigation.navigate({ routeName: "ResetPassword" });
      }, 2000);
    }
  };

  return (
    <View style={styles.body}>
      <LogoImage style={styles.logo} />
      <View style={styles.contentContainer}>{content}</View>
      <EmailCode correct={setCorrect}/>
      <MainButton
        style={styles.button}
        onPress={() => {
          checkCode(1);
        }}
        title="Verificar"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.mainDark,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    marginTop: 60,
    marginBottom: 20,
  },
  text: {
    marginTop: 40,
    marginBottom: 20,
    fontFamily: "roboto-bold",
    textAlign: "center",
  },

  button: {
    marginTop: 120,
  },
  bodyCorrect: {
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 14,
    width: 280,
    height: 45,
    backgroundColor: "green",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 120,
  },
  bodyIncorrect: {
    backgroundColor: "red",
  },
  textCodeFeedback: {
    fontFamily: "roboto-bold",
    color: "white",
    textAlign: "center",
    fontSize: 26,
  },
  imageCodeFeedback: {
    width: 85,
    height: 94,
    marginTop: 20,
  },
});

export default CodeRecoveryScreen;
