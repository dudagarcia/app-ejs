import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import MainButton from "../../components/MainButton";
import LogoImage from "../../components/LogoImage";
import Images from "../../constants/images";
import { deleteUser } from '../../services/user';
import CheckedAccountSimbol from "../../components/CheckedAccountSimbol";
import { connect } from 'react-redux';

const DeleteAccountScreen = (props) => {

  const deleteAccount = async () => {
    const userInfo = {
      id: props.id
    }
    const response = await deleteUser(userInfo);
    if(response.data.affectedRows === 1){
      props.navigation.navigate({ routeName: "Login"});
    }
    else{
      console.log("error");
    }
    
  }

  return (
    <View style={styles.body}>
      <LogoImage style={styles.logo} />
      <CheckedAccountSimbol style={styles.check} />
      <Text style={styles.text}>
        Tem certeza que deseja excluir essa conta?
      </Text>
      <View style={styles.container}>
        <Image source={Images.simonSad.uri} style={styles.image} />
        <View style={styles.buttons}>
          <MainButton onPress={() => { deleteAccount(); }} style={styles.button} title="Excluir" />
          <TouchableOpacity onPress={ () => {
            props.navigation.goBack();
          }}>
            <Text style={styles.text}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 127.68,
    height: 127.68,
    //left: 141.16;
    //top: 89.16,
    position: "absolute",
    marginTop: 80,
  },
  body: {
    backgroundColor: Colors.mainDark,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 100,
  },
  text: {
    color: "white",
    fontFamily: "roboto-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 40,
    marginHorizontal: 30,
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 70,
    marginLeft: 15
  },
  button: {
    marginTop: 40,
    marginBottom: -20,
    width: 160,
  },
  check: {
    marginTop: 70,
    marginLeft: 92,
  },
  container:{
    marginTop: 40,
  },
  buttons:{
    marginTop: 70
  }
});

const mapStateToProps = state => ({
  id: state.user.id
})

export default connect(mapStateToProps)(DeleteAccountScreen);
