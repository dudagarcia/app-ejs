import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import { BlueButton, BlueTitle, InputProfile } from "../../../../components";
import { AdicionarSetor, CardSetor } from "./components";
import { CardPerfil } from "../GerenciarPerfis/components";
import { connect, useDispatch } from "react-redux";
import { ADD_SECTIONS } from '../../../../redux/actions/actions';
import { listAllSections } from '../../../../services/section';
import { TouchableOpacity } from "react-native-gesture-handler";

const GerenciarSetores = (props) => {
  const [addSetor, setAddSetor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const dispatch = useDispatch();

  const searchAllSections = async () => {
    setLoading(true);
    const { data } = await listAllSections();
    dispatch({ type: ADD_SECTIONS, payload: data});
    setLoading(false);
  }

  const openEditScreen = (setor) => {
    setSelectedSection(setor)
    setAddSetor(true)
  }

  useEffect(()=>{
    searchAllSections()
  },[])

  return (
    <View style={styles.body}>
      {
        !addSetor ? (
          <>
            <BlueTitle style={styles.title} title="Gerenciar Setores" />
            <View style={styles.container}>
              <ScrollView style={styles.listContainer}>
                {
                  loading
                  ?
                    <ActivityIndicator/>
                  :
                  (
                     props.sections.map((setor) => {
                        return <CardPerfil perfil={setor} onPress={()=>openEditScreen(setor)}/>;
                     })
                  )
                }

              </ScrollView>
              <View style={styles.buttonContainer}>
                
                <BlueButton style={styles.button}
                  onPress={() => {
                    setAddSetor(true);
                  }}
                >
                  {<Text style={styles.buttonText}>Novo Setor</Text>}
                </BlueButton>
              </View>
            </View>
          </>
        ) : (
          <>
            <View>
              <AdicionarSetor 
                searchAllSections={searchAllSections} 
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                setAddSetor={setAddSetor}
              />
            </View>
          </>
        )
      }
    </View>
  );
};

const mapStateToProps = (state) => ({
  sections: state.sections,
});

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //display: "flex",
  },
  
  buttonText: {
    color: "#ffffff",
    fontFamily: "roboto-bold",
    fontWeight: "700",
    fontSize: 18,
    alignItems: "center",
  },
  button:{
    marginTop: 40,
    position: "absolute",
    
  },
  listContainer: {
    marginTop: 70,
  },
  container: {
    width: "80%",
  }
});

export default connect(mapStateToProps)(GerenciarSetores);
