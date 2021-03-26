import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import colors from "../../../../constants/colors";
import { Tabs, BlueButton } from "../../../../components";
import {
  AdicionarProjeto,
  Arquivados,
  Ativos,
  CardProjeto,
} from "./components";
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from "react";
import Colors from '../../../../constants/colors';
import { useLinkProps } from "@react-navigation/native";
import { connect } from "react-redux";
import { ADD_PROJECT } from '../../../../redux/actions/actions';
import { listActiveProjects, listNotActiveProjects } from '../../../../services/project';

const GerenciarProjetos = (props) => {
  const [addProject, setAddProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const searchAllProjects = async () => {
    setLoading(true);
    const reponseActive = await listActiveProjects();
    const reponseNotActive = await listNotActiveProjects();
    dispatch({ type: ADD_SECTIONS, payload: { 
        active: reponseActive.data, 
        notActive: reponseNotActive.data
    }});
    setLoading(false);
  }

  const openEditScreen = (project) => {
    setSelectedProject(project)
    setAddProject(true)
  }

  useEffect(()=>{
    searchAllProjects()
  },[])

  return (
    <View style={styles.mainContainer}>
     
      {!addProject ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Gerenciar Projetos</Text>
          </View>
          <View style={styles.projetosContainer}>
            <Tabs
              header1="Ativos"
              header2="Arquivados"
              content1={
                <Ativos 
                  openEditScreen={openEditScreen} 
                />
              }
              content2={
                <Arquivados 
                  openEditScreen={openEditScreen} 
                />
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <BlueButton
              onPress={() => {
                setAddProject(true);
              }}
            >
              {<Text style={styles.buttonText}>Adicionar Projeto</Text>}
            </BlueButton>
          </View>
        </>
      ) : (
        <>
          <View style={styles.projetosContainer}>
            <AdicionarProjeto
              searchAllProjects={searchAllProjects} 
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject} 
              setAddProject={setAddProject} 
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  title: {
    color: colors.mainDark,
    fontWeight: "bold",
    fontSize: 20,
  },

  projetosContainer: {
    marginTop: 12,
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
  },

  buttonContainer: {
    position: "absolute",
    marginTop: 555,
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

  icon:{
    marginLeft: -40,
    marginRight: 15,
    color: Colors.mainDark
  }
});

export default GerenciarProjetos;
