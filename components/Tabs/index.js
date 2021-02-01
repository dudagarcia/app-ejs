import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";

const Tabs = ({ header1 , header2, content1, content2}) => {

  const [headerSelected, setHeaderSelected] = useState(true);


  return (
    <View style={styles.container}>
      <View style={styles.headers}>

        <TouchableOpacity 
            style={headerSelected ? styles.headerSelected : styles.headerNotSelected} 
            onPress={()=>{setHeaderSelected(true)}}
        >
          <Text style={styles.headerTitle}>{header1}</Text>
        </TouchableOpacity>


        <TouchableOpacity 
            style={!headerSelected ? styles.headerSelected : styles.headerNotSelected} 
            onPress={()=>{setHeaderSelected(false)}}
        >
          <Text style={styles.headerTitle}>{header2}</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.content}>
          {
              headerSelected ? content1 : content2 
          }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "75%",
  },

  headerSelected: {
    borderBottomColor: colors.mainDark,
    borderBottomWidth: 2,
    padding: 5,
  },

  headerNotSelected: {
    borderBottomColor: "white",
    padding: 5,
  },

  headerTitle: {
    color: colors.lighterBlue,
    fontWeight: "bold",
    fontSize: 16,
  },

  content: {
      marginTop: 10,
  },

  container: {
    height: '95%'
  }
});

export default Tabs;
