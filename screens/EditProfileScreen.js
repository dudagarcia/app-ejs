import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import colors from "../constants/colors";
import MainButton from "../components/MainButton";
import images from "../constants/images";
//import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import DynamicPicker from "../components/DynamicPicker";
import { Colors } from "react-native/Libraries/NewAppScreen";

const containerHeight = 50;
const maxDropDownItems = 3;
const marginsBetween = 20;

const EditProfileScreen = () => {
  const [testVar, setTestVar] = useState("uk");
  const [team, setTeam] = useState("Time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cellphone, setCellphone] = useState("");

  const [activeProjects, setActiveProjects] = useState([]);
  const [department, setDepartment] = useState("");
  const [projectsViewHeight, setProjectsViewHeight] = useState(50);
  const [departmentViewHeight, setDepartmentViewHeight] = useState(50);

  const departments = ["Projetos", "Marketing"];

  const teams = ["App-EJs", "Doula"];

  const departments2 = [
    { value: "Projetos", label: "Projetos" },
    { value: "Marketing", label: "Marketing" },
    { value: "Vendas", label: "Vendas" },
    { value: "Financas e Pessoas", label: "Finanças e Pessoas" },
  ];
  const multiple = false;

  const teams2 = [
    { value: "App-EJs", label: "App-EJs" },
    { value: "Doula", label: "Doula" },
    { value: "Ecommerce", label: "Ecommerce" },
  ];
  console.log(name, department, activeProjects, projectsViewHeight);

  const setViewHeight = (newHeight) => {
    setDepartmentViewHeight(newHeight);
  };

  return (
    <View style={styles.body}>
      <ImageBackground
        source={images.backgroundMain.uri}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBorda}>
              <Image source={images.simonAmazed.uri} style={styles.image} />
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Perfil</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              style={styles.dataText}
              placeholder="Nome"
              placeholderTextColor={colors.mediumBlue}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.halfDataContainer}>
              <TextInput
                style={styles.dataText}
                placeholder="Nascimento"
                placeholderTextColor={colors.mediumBlue}
                onChangeText={(text) => setBirthday(text)}
              />
            </View>
            <View style={styles.halfDataContainer}>
              <TextInput
                style={styles.dataText}
                placeholder="Idade"
                placeholderTextColor={colors.mainDark}
              />
            </View>
          </View>

          <View style={styles.dataContainer}>
            <TextInput
              style={styles.dataText}
              placeholder="e-mail"
              placeholderTextColor={colors.mediumBlue}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              style={styles.dataText}
              placeholder="Celular"
              placeholderTextColor={colors.mediumBlue}
              onChangeText={(text) => setCellphone(text)}
            />
          </View>

          <View
            style={
              { height: 170 }
              //styles.dataContainer
            }
          >
            {/*
            <Picker
              selectedValue={department}
              style={styles.pickerContainer}
              onValueChange={(value, itemIndex) => {
                setDepartment(value);
                //console.log(itemValue);
              }}
            >
              {departments.map((val, index) => {
                return <Picker.Item label={val} value={val} key={index} />;
              })}
            </Picker>
            */
            /*
            <Text>{department}</Text>
            <DynamicPicker
              items={departments2}
              multiple={multiple}
              multipleText={"Departamento"}
              zIndex={5000}
              chosen={department}
              setChosen={setDepartment}
              placeholder="Departamento"
              setViewHeight={setViewHeight}
            />
            */}
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          //display: "flex",
          //flexDirection: "row",
          //justifyContent: "center",
          position: "absolute",
          marginTop: 440,
          marginHorizontal: 50,
          width: 260,
          height: projectsViewHeight,
          //zIndex: 5000,
        }}
      >
        <DropDownPicker
          items={teams2}
          multiple={true}
          multipleText="Participando de %d projetos"
          //zIndex={5000}
          defaultValue={activeProjects}
          //style={{ flexDirection: "row-reverse" }}
          zIndex={5000}
          //style={styles.pickerStyle}
          containerStyle={styles.dropDownContainer}
          itemStyle={styles.dropDownItem}
          labelStyle={styles.dropDownLabel}
          selectedtLabelStyle={{
            color: colors.mainDark,
          }}
          onChangeItem={(item) =>
            setActiveProjects(
              item
              //[...activeProjects, item] // an array of the selected items
            )
          }
          //dropDownMaxHeight={Math.min(maxDropDownItems) * containerHeight}
          dropDownMaxHeight={150}
          onOpen={
            () => setProjectsViewHeight(200)
            //setProjectsViewHeight((maxDropDownItems + 1) * containerHeight)
          }
          onClose={() => setProjectsViewHeight(50)}
          //onChangeList={(items) => setActiveProjects(items)}
        />
      </View>
      <View
        style={{
          //display: "flex",
          //flexDirection: "row",
          //justifyContent: "center",
          position: "absolute",
          marginTop: 510,
          marginHorizontal: 50,
          width: 260,
          height: departmentViewHeight,
          //zIndex: 5000,
        }}
      >
        <DropDownPicker
          items={departments2}
          //multiple={true}
          //multipleText="Participando de %d projetos"
          //zIndex={5000}
          defaultValue={department}
          //style={{ flexDirection: "row-reverse" }}
          zIndex={4000}
          //style={styles.pickerStyle}
          containerStyle={styles.dropDownContainer}
          itemStyle={styles.dropDownItem}
          labelStyle={styles.dropDownLabel}
          selectedtLabelStyle={{
            color: colors.mainDark,
          }}
          onChangeItem={(item) => setDepartment(item.value)}
          //dropDownMaxHeight={Math.min(maxDropDownItems) * containerHeight}
          dropDownMaxHeight={150}
          onOpen={
            () => setDepartmentViewHeight(200)
            //setProjectsViewHeight((maxDropDownItems + 1) * containerHeight)
          }
          onClose={() => setDepartmentViewHeight(50)}
          //onChangeList={(items) => setActiveProjects(items)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  body: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    //justifyContent: "center",
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
    /*
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    */
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    zIndex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    //marginLeft: 30,
    borderRadius: 25,
    padding: 30,
    shadowColor: "#fff",
    shadowRadius: 5,
    elevation: 8,
    //height: viewHeight(),
    width: 320,
    height: 520,
    //position: "absolute",
    marginTop: 70,
    marginBottom: 20,
  },

  contentContainer: {
    marginTop: 40,
  },

  menu: {
    marginTop: 70,
  },

  pickerContainer: {
    height: "100%",
    width: "100%",
    color: colors.mainDark,
    fontFamily: "roboto-regular",
    fontSize: 14,
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
    width: "100%",
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
    //backgroundColor: "#fff",
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

  buttonsContainer: {
    //height: 59,
    position: "absolute",
    marginTop: 500,
    resizeMode: "cover",
  },

  logoutContainer: {
    marginLeft: 40,

    /*
    width: 59,
    height: 59,
    position: "absolute",
    marginTop: 500,
    marginLeft: 50,
    marginRight: 20,
    resizeMode: "cover",
    /*
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    */
  },

  eraseContainer: {
    marginLeft: 50,
    /*
    width: 59,
    height: 59,
    position: "absolute",
    marginTop: 500,
    marginLeft: 220,
     marginRight: 20,
    resizeMode: "cover",
    
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    */
  },

  buttonIcon: {
    width: 59,
    height: 59,
  },

  pickerStyle: {
    backgroundColor: colors.softBlue,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  dropDownContainer: {
    width: "100%",
    height: 50,
    //height: "100%",
    //justifyContent: "center",
    //alignItems: "center",

    //marginTop: marginsBetween,

    //backgroundColor: colors.softBlue,

    //justifyContent: "center",
  },

  dropDownItem: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  dropDownLabel: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    //textAlign: "right",
    color: colors.mediumBlue,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  selectedtLabelStyle: {
    color: colors.mainDark,
  },

  placeholderStyle: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    //textAlign: "right",
    color: colors.mediumBlue,
  },
});

export default EditProfileScreen;
