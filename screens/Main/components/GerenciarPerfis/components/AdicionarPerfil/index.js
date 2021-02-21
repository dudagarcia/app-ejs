import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { InputProfile, BlueTitle, BlueButton } from "../../../../../../components";
import { createUser } from '../../../../../../services/user';
import { connect } from 'react-redux';
import { colors } from "../../../../../../constants";


const AdicionarPerfil = props => {
  
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const sendForm = async () => {
    isLoading(true);
    const userInfo = {
      email: email,
      password: password
    }
    const response = await createUser(userInfo);
    console.log(response)
    if(response.data.affectedRows === 1){
      setSuccess(true);
      props.setAddProfile(false);
    }
    else{
      setError(true);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <InputProfile text="E-mail" style={styles.input} onChangeText={text => setEmail(text)}/>
      <InputProfile text="Senha" style={styles.input} onChangeText={text => setPassword(text)} password={true}/>
      <View style={styles.buttonContainer}>
        <BlueButton title="Adicionar" onPress={() => sendForm()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40
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
    position: 'absolute',
    marginTop: 455,
    display: 'flex',
    alignSelf: 'center'
},
});

export default AdicionarPerfil;
