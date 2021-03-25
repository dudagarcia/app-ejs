import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  BlueTitle,
  InputProfile,
  BlueButton,
  MultiplePicker,
  SingularPicker,
} from "../../../../../../components";
import { connect } from "react-redux";
import { createSection } from "../../../../../../services/section";
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../../../../../constants/colors';


const AdicionarSetor = props => {
    
    const [name, setName] = useState("");
    const [manager, setManager] = useState("");
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [users, setUsers] = useState(props.users.allUsers.map(item => {return {value: item.id, label: item.name || item.email} }));

  const sendForm = async () => {
    isLoading(true);
    const sectionInfo = {
      name: name,
      manager: manager,
    };
    const response = await createSection(sectionInfo);
    if (response.data.affectedRows === 1) {
      setSuccess(true);
      props.setAddSetor(false);
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.wrapper}>
        <Icon name="arrowleft" style={styles.icon} size={30} onPress={() => { props.setAddSetor(false); }}/>
        <View style={styles.titleContainer}>
              <Text style={styles.title}>Editar Setores</Text>
        </View>
      </View>
      <InputProfile
        text="Nome do setor"
        style={styles.input}
        onChangeText={(text) => setName(text)}
      />
      <SingularPicker
        data={users}
        placeholder="Selecionar Diretor"
        setPicker={setManager}
      />
      <BlueButton style={styles.button} onPress={() => sendForm()}>
        {<Text style={styles.buttonText}>Salvar</Text>}
      </BlueButton>
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
    color: Colors.mainDark
  },
  title: {
    color: Colors.mainDark,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: -30,
    marginBottom: 40
  },
});

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(AdicionarSetor);
