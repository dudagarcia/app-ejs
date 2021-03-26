import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Tabs } from "../../../../components";
import { colors } from "../../../../constants";
import { TarefasMeuSetor, TarefasTodosMembros } from "./components";
import { ADD_ALL_USER } from "../../../../redux/actions/actions";
import { listAllUsers } from "../../../../services/user";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const TarefasMembros = (props) => {

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();

  const filterByRole = (item) => {
    return item.roleId === props.user.roleId
  }

  const searchAllUsers = async () => {
    setLoading(true)
    const { data } = await listAllUsers();
    dispatch({ type: ADD_ALL_USER, payload: {allUsers: data, mySection: data.filter(filterByRole)}});
    setLoading(false)
  }

  useEffect(()=>{
    searchAllUsers()
  },[])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tarefas Membros</Text>
      </View>
      {
        loading ?
          <ActivityIndicator color={colors.mainDark}/>  
        :
          <Tabs
              header1='Meu Setor'
              header2='Todos os Membros'
              content1={<TarefasMeuSetor/>}
              content2={<TarefasTodosMembros/>}
          />
      }

    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    },
  
    titleContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 20
    },
  
    title: {
      color: colors.mainDark,
      fontWeight: "bold",
      fontSize: 20,
    },
});

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(TarefasMembros);
