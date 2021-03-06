import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import { Tabs, BlueButton } from "../../../../components";
import { MeuSetor, TodosOsMembros, AdicionarPerfil } from "./components";
import { perfis } from "../../../../constants";
import { listAllUsers } from "../../../../services/user";
import { useEffect } from "react";
import { connect } from "react-redux";

const GerenciarPerfis = (props) => {
  const [addProfile, setAddProfile] = useState(false);
  const [loading, setLoading] = useState();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gerenciar Perfis</Text>
      </View>
      {!addProfile ? (
        <>
          <View style={styles.membrosContainer}>
            <Tabs
              header1="Meu Setor"
              header2="Todos os Membros"
              content1={
                <MeuSetor perfis={props.users.mySection} loading={loading} />
              }
              content2={
                <TodosOsMembros
                  perfis={props.users.allUsers}
                  loading={loading}
                />
              }
            />
          </View>
          <BlueButton
            style={styles.button}
            onPress={() => {
              setAddProfile(true);
            }}
          >
            {<Text style={styles.buttonText}>Adicionar Perfil</Text>}
          </BlueButton>
        </>
      ) : (
        <>
          <View>
            <AdicionarPerfil setAddProfile={setAddProfile} />
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

  membrosContainer: {
    marginTop: 12,
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
  },

  button: {
    marginTop: 30,
    marginBottom: -70,
  },

  buttonText: {
    color: "#ffffff",
    fontFamily: "roboto-bold",
    fontWeight: "700",
    fontSize: 18,
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
});

export default connect(mapStateToProps)(GerenciarPerfis);
