import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../../../../constants/colors';
import { ModalDetails } from '../../../../../../components';

const CardSetor = ({props}) => {

    const [modalVisible, setModalVisible] = useState(false);
    
    return (
      <TouchableOpacity style={styles.container}  onPress={() => {setModalVisible(true)}}>
        <ModalDetails text={"Novo setor adicionado!"} visible={modalVisible}/>
        <View style={styles.circulo}/>
        <Text style={styles.name}>{props.name}</Text>
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
  
  export default CardSetor;
  