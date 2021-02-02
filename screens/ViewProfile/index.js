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

import colors from "../../constants/colors";

import images from "../../constants/images";
import {
  containerHeight,
  maxDropDownItems,
  dropdownItemHeight,
  marginsBetweenElements,
  dateFormat,
} from "./ProfileConstants";

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

export const ProfileStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
  },

  body: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
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

  profilePictureStyle: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  scrollContent: {
    alignItems: "center",
  },

  scrollContainer: {
    marginTop: 10,
    height: 450,
    flex: 0,
    flexGrow: 1,
  },

  container: {
    /*
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    */
    /*
    flexDirection: "column",
    //flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    
    //zIndex: 1,
    */
    alignSelf: "center",
    flex: 0,
    backgroundColor: "#fff",
    marginHorizontal: "5%",
    //marginLeft: 30,
    borderRadius: 25,
    padding: 30,
    shadowColor: "#fff",
    shadowRadius: 5,
    elevation: 8,
    //height: viewHeight(),
    //width: 320,
    width: "90%",
    height: 520,
    //position: "absolute",
    marginTop: 70,
  },

  activeDataText: {
    color: colors.mainDark,
    fontFamily: "roboto-regular",
    fontSize: 14,
    textAlign: "center",
  },

  inactiveDataText: {
    ...{ color: colors.mediumBlue },
    ...self.activeDataText,
  },

  invalidDataText: { ...self.activeDataText, ...{ color: colors.invalid } },

  dataContainer: {
    marginTop: marginsBetweenElements,
    marginHorizontal: 0,
    height: containerHeight,
    width: "100%",
    //width: 300,
    borderRadius: 15,
    backgroundColor: colors.softBlue,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  halfDataContainer: {
    //marginTop: 20,
    marginHorizontal: 0,
    height: containerHeight,
    width: "49%",
    borderRadius: 15,
    backgroundColor: colors.softBlue,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  /*
  halfDataContainer: {
    ...self.dataContainer,
    ...{ marginTop: 0, width: "49%" },
  },
  */
  rowContainer: {
    //flex: 1,
    //backgroundColor: "#fff",
    width: "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",

    height: containerHeight,
    marginTop: marginsBetweenElements,
  },

  titleContainer: {
    marginTop: 10,
    marginLeft: 0,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "6%",
    width: "88%",
    justifyContent: "space-evenly",
    position: "absolute",
    marginTop: 572,
    resizeMode: "cover",
    zIndex: 3000,
  },

  buttonIcon: {
    width: 59,
    height: 59,
  },

  pickerStyle: {
    backgroundColor: colors.softBlue,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  dropDownContainer: {
    width: "100%",
    height: containerHeight,
  },

  dropDownItem: {
    justifyContent: "flex-start",
    //alignItems: "flex-start",
    //textAlign: "center",
    height: dropdownItemHeight,
  },

  dropDownLabel: {
    /*
    ...self.activeDataText,
    */
    fontSize: 14,
    fontFamily: "roboto-regular",
    //textAlign: "right",
    color: colors.mediumBlue,
    //alignItems: "center",
    //justifyContent: "center",
    textAlign: "center",
  },
});


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
