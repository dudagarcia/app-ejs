import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import {
  BlueTitle,
  InputProfile,
  BlueButton,
  MultiplePicker,
  SingularPicker,
} from "../../../../../../components";
import { connect } from "react-redux";
import { createSection, updateSection } from "../../../../../../services/section";
import Icon from 'react-native-vector-icons/AntDesign';
import { colors, images} from '../../../../../../constants';

const AdicionarSetor = props => {

    
    const [name, setName] = useState(props?.selectedSection?.name || "");
    const [manager, setManager] = useState(props?.selectedSection?.manager || "");
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [users, setUsers] = useState(props?.users?.allUsers.map(item => {return {value: item.id, label: item.name || item.email} }));

  const sendForm = async () => {
    isLoading(true);
    const sectionInfo = {
      name: name,
      manager: manager,
    };

    var response;
    if(!props.selectedSection) response = await createSection(sectionInfo);
    else response = await updateSection({...sectionInfo,...{id: props.selectedSection.id}});

    if (response.data.affectedRows === 1) {
      setSuccess(true);
      props.setAddSetor(false);
      props.searchAllSections();
      props.setSelectedSection(null);
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.wrapper}>
        <Icon name="arrowleft" style={styles.icon} size={30} onPress={() => { props.setAddSetor(false); props.setSelectedSection(null) }}/>
        <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.selectedSection ? "Editar Setores" : "Novo Setor"}</Text>
        </View>
      </View>
      <InputProfile
        text="Nome do setor"
        style={styles.input}
        defaultValue={props.selectedSection?.name}
        onChangeText={(text) => setName(text)}
      />
      <SingularPicker
        data={users}
        placeholder="Selecionar Diretor"
        setPicker={setManager}
        status={props?.selectedSection?.manager || null}
      />

      <BlueButton style={styles.button} onPress={() => sendForm()}>
        {
          loading ?
          <ActivityIndicator color="#fff"/>
          :
          <Text style={styles.buttonText}>Salvar</Text>
        }
      </BlueButton>

      <TouchableOpacity style={styles.trashContainer} >
        <Image source={images.trashcanIcon.uri} style={styles.trash} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
  },
  title: {
    marginBottom: 40,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 0,
  },
  input: {
    marginTop: 70,
  },
  button: {
    marginTop: 500,
    position: "absolute",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "roboto-bold",
    fontWeight: "700",
    fontSize: 18,
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon:{
    marginLeft: -40,
    marginRight: 15,
    color: { colors, images}.mainDark
  },
  title: {
    color: { colors, images}.mainDark,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: -30,
    marginBottom: 40
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
  }
});

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(AdicionarSetor);
