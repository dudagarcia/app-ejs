import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import {
  InputProfile,
  BlueTitle,
  BlueButton,
} from "../../../../../../components";
import { createUser, deleteUser, updateUser } from "../../../../../../services/user";
import { connect } from "react-redux";
import { colors, images } from "../../../../../../constants";

const AdicionarPerfil = (props) => {
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState(props?.selectedProfile?.email || null);
  const [password, setPassword] = useState(props?.selectedProfile?.password || null);

  const sendForm = async () => {
    isLoading(true);
  
    var response;
    var userInfo;
    if(props?.selectedProfile){
      userInfo = {
        email: email
      }
      response = await updateUser({...userInfo, ...{id: props.selectedProfile.id}});
    } 
    else{
      userInfo = {
        email: email,
        password: password,
      };
      response = await createUser(userInfo);
    } 
    console.log(response);
    if (response.data.affectedRows === 1) {
      console.log("top");
      setSuccess(true);
      props.setAddProfile(false);
      props.searchAllUsers();
      props?.setSelectedProfile(null);
    } else {
      console.log("nada top");
      setError(true);
    }
    isLoading(false);
  };

  const deletarPerfil = async () => {
    const userInfo = {
      id: props.selectedProfile.id
    }
    const response = await deleteUser(userInfo);
    if(response.data.affectedRows === 1){
      props.setAddProfile(false);
      console.log("ok");
    }
    else{
      console.log("error");
    }
  }

  return (
    <View style={styles.mainContainer}>
      <InputProfile
        text="E-mail"
        style={styles.input}
        defaultValue={email}
        onChangeText={(text) => setEmail(text)}
      />
      {
        props?.selectedProfile ?
        <TouchableOpacity style={styles.trashContainer} onPress={() => {deletarPerfil()}}>
          <Image source={images.trashcanIcon.uri} style={styles.trash} />
        </TouchableOpacity>
        :
        <InputProfile
          text="Senha"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          password={true}
        />
      }
      
      <View style={styles.buttonContainer}>
        <BlueButton
          onPress={() => {
            sendForm();
          }}
        >
          {<Text style={styles.buttonText}>Salvar</Text>}
        </BlueButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 90,
  },
  input: {
    marginTop: 20,
  },

  buttonContainer: {
    position: "absolute",
    marginTop: 455,
    display: "flex",
    alignSelf: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontFamily: "roboto-bold",
    fontWeight: "700",
    fontSize: 18,
    alignItems: "center",
  },
  trash: {
    width: 40,
    height: 40,
    alignSelf: "center"

  },
  trashContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      borderRadius: 100,
      width: 40,
      alignSelf: "center"
  },
});

export default AdicionarPerfil;
