import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { CardProjeto } from '../index';
import { connect } from 'react-redux';

// import { Container } from './styles';

const Arquivados = props => {
  return (
    <ScrollView style={styles.container}>
    {
      props.projects.notActive.map((projeto)=>{
        return <CardProjeto 
                  projeto={projeto} 
                  onPress={()=>{ props.openEditScreen(projeto)}}
                />;
      })
    }
</ScrollView>
  );
}

const mapStateToProps = (state) => ({
  projects: state.projects
});

const styles = StyleSheet.create({
    container:{
    }
});


export default connect(mapStateToProps)(Arquivados);