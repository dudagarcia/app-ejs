import React from 'react';
import { View, StyleSheet } from 'react-native';
import { InputProfile, MultiplePicker, BlueButton, SingularPicker } from '../../../../../../components';


const AdicionarProjeto = () => {
  return (
    <View style={styles.container}>
      <InputProfile style={styles.input} text='Nome do projeto'/>
      <MultiplePicker style={styles.dropdown} placeholder="Selecionar Participantes"/>
      <SingularPicker placeholder="Status do Projeto"/>
      <InputProfile style={styles.input} text='Descrição do projeto'/>
      <BlueButton title="Adicionar" style={styles.button}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60
  },
  button:{
    marginTop: 415,
    position: 'absolute'
  },
  input:{
    marginTop: 20
  },
  dropdown:{
    width: 100
  }
});

export default AdicionarProjeto;