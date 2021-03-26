import React, { useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import {
  InputProfile,
  MultiplePicker,
  BlueButton,
  SingularPicker,
} from "../../../../../../components";
import { connect } from "react-redux";
import { createProject, updateProject, deleteProject } from "../../../../../../services/project";
import Icon from 'react-native-vector-icons/AntDesign';
import { colors, images} from '../../../../../../constants';

const AdicionarProjeto = (props) => {
  const [allUsers, setAllUsers] = useState(
    props.users.allUsers.map((item) => {
      return { value: item.id, label: item.name || item.email };
    })
  );

  const [name, setName] = useState(props?.selectedProject?.name || null);
  const [contributors, setContributors] = useState(
    props?.selectedProject?.contributors.includes(',') ?
    props?.selectedProject?.contributors.split(',').map(x=>+x) :
    []
    );
  const [status, setStatus] = useState(props?.selectedProject?.status || 0);
  const [description, setDescription] = useState(props?.selectedProject?.description || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const deletarProjeto = async () => {
    const projectInfo = {
      id: props.selectedProject.id
    }
    const response = await deleteProject(projectInfo);
    if(response.data.affectedRows === 1){
      props.setAddProject(false);
      console.log("ok");
    }
    else{
      console.log("error");
    }
  }


  const sendForm = async () => {
    setLoading(true);
    const projectInfo = {
      name: name,
      contributors: contributors,
      status: status,
      description: description,
    };

    var response;
    if(!props?.selectedProject) response = await createProject(projectInfo);
    else response = await updateProject({...projectInfo, ...{ id: props.selectedProject.id}});

    if (response.data.affectedRows === 1) {
      console.log("top");
      setSuccess(true);
      props?.setAddProject(false);
      props?.searchAllProjects();
      props?.setSelectedProject(null)
    } else {
      console.log("nada top");
      setError(true);
    }
    setLoading(false);
  };

  const data = [
    { value: 1, label: "Ativo" },
    { value: 0, label: "Inativo" },
  ];

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Icon name="arrowleft" style={styles.icon} size={30} onPress={() => { props?.setAddProject(false); }}/>  
          <Text style={styles.title}>{ props?.selectedProject ? "Editar Projeto" : "Novo Projeto"}</Text>
        </View>
      <InputProfile
        style={styles.input}
        text="Nome do projeto"
        defaultValue={name}
        onChangeText={(text) => setName(text)}
      />
      <MultiplePicker
        defaultValue={contributors?.length > 0 ? contributors : null}
        data={allUsers}
        style={styles.dropdown}
        placeholder="Selecionar Participantes"
        setContributors={setContributors}
      />
      <SingularPicker
        data={data}
        placeholder="Status do Projeto"
        setPicker={setStatus}
        status={status}
      />
      <InputProfile
        style={styles.input}
        text="Descrição do projeto"
        onChangeText={(text) => setDescription(text)}
        defaultValue={description}
      />
      {
        props?.selectedProject &&
        <TouchableOpacity style={styles.trashContainer} onPress={() => {deletarProjeto()}}>
          <Image source={images.trashcanIcon.uri} style={styles.trash} />
        </TouchableOpacity>
      }
      
      <BlueButton style={styles.button} onPress={sendForm}>
        {
          loading ?
          <ActivityIndicator color="white"/>
          :
          <Text style={styles.buttonText}>Salvar</Text>
        }
      </BlueButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: 520,
    position: "absolute",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "roboto-bold",
    fontWeight: "700",
    fontSize: 18,
    alignItems: "center",
  },
  input: {
    marginTop: 30,
  },
  dropdown: {
    width: 100,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50
  },
  icon:{
    color: colors.mainDark,
    marginRight: 30,
    marginLeft: -50
  },
  title: {
    color: colors.mainDark,
    fontWeight: "bold",
    fontSize: 20,
   
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

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(AdicionarProjeto);
