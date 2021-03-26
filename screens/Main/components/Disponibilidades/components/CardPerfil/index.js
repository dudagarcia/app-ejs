import React,  { useState } from "react";
import { useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { colors } from '../../../../../../constants';


const CardPerfil = ({ perfil, onSelect, onRemove }) => {

  const [checked, setChecked] = useState();
  const [styleContainer, setStyleContainer] = useState(styles.container);
  const [styleText, setStyleText] = useState(styles.name);

  const setStyle = () => {
      if(checked){
        setStyleContainer(styles.containerChecked);
        setStyleText(styles.nameChecked);
      } else {
        setStyleContainer(styles.container);
        setStyleText(styles.name);
      }
  }

  const handlePress = () => {
    setChecked(!checked);

    if(!checked){
      onSelect(perfil);
    }else{
      onRemove(perfil);
    }
  }

  useEffect(()=>{
    setStyle();
  },[checked]);

  return (
    <TouchableOpacity style={styleContainer} onPress={handlePress}>
      <RadioButton 
        status={checked ? 'checked' : 'unchecked'}
        color={colors.mainDark}
      />
      <Text style={styleText}>{perfil.name || perfil.email }</Text>
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
    padding: 5
  },
  name: {
    color: colors.mainDark,
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17
  },
  nameChecked: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17
  },
  containerChecked: {
    flexDirection: "row",
    height: 40,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: colors.mediumBlue,
    color: 'white',
    borderRadius: 25,
    padding: 5
  }
});

export default CardPerfil;
