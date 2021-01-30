import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import colors from "../constants/colors";

import images from "../constants/images";
import { ProfileStyles } from "../constants/ProfileStyles";
import {
  containerHeight,
  maxDropDownItems,
  dropdownItemHeight,
  marginsBetweenElements,
  dateFormat,
} from "../constants/ProfileConstants";

const ViewProfileScreen = () => {
  const activeProjects = ["Projeto1", "Projeto2", "Projeto3"];

  return (
    <View style={ProfileStyles.body}>
      <ImageBackground
        source={images.backgroundMain.uri}
        style={ProfileStyles.backgroundImage}
      >
        <View style={ProfileStyles.container}>
          <View style={ProfileStyles.logoContainer}>
            <View style={ProfileStyles.logoBorda}>
              <Image
                source={images.simonAmazed.uri}
                style={ProfileStyles.profilePictureStyle}
              />
            </View>
          </View>
          <View style={ProfileStyles.titleContainer}>
            <Text style={ProfileStyles.title}>Perfil</Text>
          </View>
          <ScrollView
            style={ProfileStyles.scrollContainer}
            contentContainerStyle={ProfileStyles.scrollContent}
          >
            <View style={ProfileStyles.dataContainer}>
              <Text style={ProfileStyles.activeDataText}>Nome</Text>
            </View>
            <View style={ProfileStyles.rowContainer}>
              <View style={ProfileStyles.halfDataContainer}>
                <Text style={ProfileStyles.activeDataText}>
                  Data de Nascimento
                </Text>
              </View>
              <View style={ProfileStyles.halfDataContainer}>
                <Text style={ProfileStyles.activeDataText}>Idade</Text>
              </View>
            </View>
            <View style={ProfileStyles.dataContainer}>
              <Text style={ProfileStyles.activeDataText}>E-mail</Text>
            </View>
            <View style={ProfileStyles.dataContainer}>
              <Text style={ProfileStyles.activeDataText}>Celular</Text>
            </View>
            <View style={ProfileStyles.dataContainer}>
              <Text style={ProfileStyles.activeDataText}>Setor</Text>
            </View>
            <View
              style={{
                marginTop: marginsBetweenElements,
                borderRadius: 15,
                backgroundColor: colors.softBlue,
                alignItems: "center",
                justifyContent: "space-evenly",
                alignContent: "center",
                flex: 0,
                flexDirection: "column",
                flexGrow: 1,
                width: "100%",
              }}
            >
              {activeProjects.map((val) => (
                <View key={val} style={{ padding: 10 }}>
                  <Text
                    style={{
                      ...ProfileStyles.activeDataText,
                      //...{ height: dropdownItemHeight },
                    }}
                  >
                    {val}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <View
        style={{
          ...ProfileStyles.buttonsContainer,
          ...{ justifyContent: "flex-end" },
        }}
      >
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={images.editIcon.uri}
            style={ProfileStyles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

/*
const ProfileStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  body: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
  },

  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    marginTop: -55,
    marginHorizontal: 120,
  },

  logoBorda: {
    display: "flex",
    backgroundColor: "#4F7DDF",
    borderRadius: 100,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: colors.mainDark,
    fontSize: 20,
    fontFamily: "roboto-bold",
  },

  image: {
    width: 120,
    height: 120,
  },

  container: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    //marginLeft: 30,
    borderRadius: 25,
    padding: 30,
    shadowColor: "#fff",
    shadowRadius: 5,
    elevation: 8,
    height: 520,
    position: "absolute",
    marginTop: 70,
    marginBottom: 20,
  },

  contentContainer: {
    marginTop: 40,
  },

  menu: {
    marginTop: 70,
  },

  dataText: {
    color: colors.mainDark,
    fontFamily: "roboto-regular",
    fontSize: 14,
    textAlign: "center",
  },

  dataContainer: {
    marginTop: 20,
    marginHorizontal: 0,
    height: 50,
    //width: 300,
    borderRadius: 15,
    backgroundColor: "rgba(79, 125, 223, 0.21)",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  rowContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    //height: 50,
    marginTop: 20,
  },

  halfDataContainer: {
    //marginTop: 20,
    marginHorizontal: 0,
    height: 50,
    width: "49.5%",
    borderRadius: 15,
    backgroundColor: "rgba(79, 125, 223, 0.21)",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    marginTop: 10,
    marginLeft: 0,
  },

  buttonContainer: {
    width: 59,
    height: 59,
    position: "absolute",
    marginTop: 500,
    marginLeft: 220,
    marginRight: 20,
    resizeMode: "cover",
  },

  buttonIcon: {
    width: 59,
    height: 59,
  },
});
*/
export default ViewProfileScreen;
