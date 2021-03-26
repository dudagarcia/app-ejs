import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { CardProjeto } from "../index";
import { connect } from 'react-redux';

const Ativos = props => {

  return (
    <ScrollView style={styles.container}>
      {props.projects.active.map((projeto) => {
        return <CardProjeto 
                  projeto={projeto} 
                  onPress={()=> {props.openEditScreen(projeto)}}
                />;
      })}
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects
});

const styles = StyleSheet.create({
  container: {},
});

export default connect(mapStateToProps)(Ativos);
