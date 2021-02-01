import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../../../../constants/colors';


const CardProjeto = ({ projeto }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.circulo}/>
        <Text style={styles.name}>{projeto.nome}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    circulo: {
      width: 15,
      height: 15,
      borderRadius: 25,
      backgroundColor: colors.mediumBlue,
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
      color: colors.mediumBlue,
      fontSize: 17,
      marginLeft: 12,
    },
  });
  
  export default CardProjeto;
  