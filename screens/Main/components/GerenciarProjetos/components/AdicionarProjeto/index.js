import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { InputProfile, MultiplePicker, BlueButton, SingularPicker } from '../../../../../../components';
import { connect } from 'react-redux';
import { createProject } from '../../../../../../services/project';


const AdicionarProjeto = props => {
  
  const [name, setName] = useState(null);
  const [contributors, setContributors] = useState([]);
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState(null);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


  const sendForm = async () => { 
    isLoading(true);
    const projectInfo = {
      name: name,
      contributors: contributors,
      status: status,
      description: description
    }

    const response = await createProject(projectInfo);
    if(response.data.affectedRows === 1){
      setSuccess(true);
      props.setAddProject(false);
    }
    else{
      setError(true);
    }
  }

  const data = ['Ativo', 'Inativo'];

  return (
    <View style={styles.container}>
      <InputProfile style={styles.input} text='Nome do projeto' onChangeText={text => setName(text)}/>
      <MultiplePicker 
        data={props.users.allUsers} 
        style={styles.dropdown} 
        placeholder="Selecionar Participantes"
        setContributors={setContributors}
      />
      <SingularPicker data={data} placeholder="Status do Projeto" setPicker={setStatus}/>
      <InputProfile style={styles.input} text='Descrição do projeto' onChangeText={text => setDescription(text)}/>
      <BlueButton title="Salvar" style={styles.button} onPress={() => sendForm()}/>
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

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(AdicionarProjeto);
