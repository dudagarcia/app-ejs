import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import colors from "../constants/colors";
import MainButton from "../components/MainButton";
import images from "../constants/images";
//import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import DynamicPicker from "../components/DynamicPicker";
import { Colors } from "react-native/Libraries/NewAppScreen";

import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const containerHeight = 50;
const maxDropDownItems = 3;
const marginsBetween = 20;
const dateFormat = "DD/MM/YYYY";

const EditProfileScreen2 = () => {
  //const [team, setTeam] = useState("Time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [age, setAge] = useState("Idade");

  const [activeProjects, setActiveProjects] = useState([]);
  const [department, setDepartment] = useState("");
  const [projectsViewHeight, setProjectsViewHeight] = useState(50);
  const [departmentViewHeight, setDepartmentViewHeight] = useState(50);

  const [showDatePicker, setShowDatePicker] = useState(false);

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

  const setViewHeight = (newHeight) => {
    setDepartmentViewHeight(newHeight);
  };

  const updateBirthday = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      console.log(selectedDate);
      setBirthday(moment(selectedDate).format(dateFormat));

      setAge(moment().diff(selectedDate, "years"));
      //setAge(moment(birthday, dateFormat).fromNow());
    }
    //const currentDate = selectedDate || birthday;
    setShowDatePicker(false);
  };

  const isBirthdayDefault = () => {
    return birthday === "";
  };

  const getDynamicTextStyle = (isPlaceholder) => {
    return isPlaceholder ? styles.inactiveDataText : styles.activeDataText;
  };

  const calcAge = (date1, date2) => {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24 * 365);
  };

  const t = isBirthdayDefault()
    ? new Date()
    : moment(birthday, dateFormat).format();

  console.log(
    name,
    department,
    activeProjects,
    projectsViewHeight,
    age,
    isBirthdayDefault(),
    showDatePicker,
    new Date(),
    birthday,
    moment(birthday, dateFormat).format(),
    t
  );

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
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.dataContainer}>
              <TextInput
                style={styles.activeDataText}
                placeholder="Nome"
                placeholderTextColor={colors.mediumBlue}
                onChangeText={(text) => setName(text)}
              />
            </View>

            <View style={styles.rowContainer}>
              <View style={styles.halfDataContainer}>
                <TextInput
                  style={styles.activeDataText}
                  placeholder="Nascimento"
                  placeholderTextColor={colors.mediumBlue}
                  onChangeText={(text) => setBirthday(text)}
                />
              </View>
            </View>

            <View style={styles.rowContainer}>
              <View style={styles.halfDataContainer}>
                <Text
                  style={getDynamicTextStyle(isBirthdayDefault())}
                  onPress={() => {
                    setShowDatePicker(true);
                  }}
                >
                  {isBirthdayDefault() ? "D. Nascimento" : birthday}
                </Text>
                {showDatePicker && (
                  <DateTimePicker
                    value={
                      isBirthdayDefault()
                        ? new Date()
                        : moment(birthday, dateFormat).toDate()
                    }
                    mode="date"
                    onChange={updateBirthday}
                  />
                )}
              </View>

              <View style={styles.halfDataContainer}>
                <Text
                  style={getDynamicTextStyle(isBirthdayDefault())}
                  //placeholder="Idade"
                  //placeholderTextColor={colors.mainDark}
                >
                  {age}
                </Text>
              </View>
            </View>

            <View style={styles.dataContainer}>
              <TextInput
                style={styles.activeDataText}
                placeholder="e-mail"
                placeholderTextColor={colors.mediumBlue}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.dataContainer}>
              <TextInput
                style={styles.activeDataText}
                placeholder="Celular"
                placeholderTextColor={colors.mediumBlue}
                onChangeText={(text) => setCellphone(text)}
              />
            </View>

            <View>
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
            <View
              style={{
                //display: "flex",
                //flexDirection: "row",
                //justifyContent: "center",
                /*
                alignSelf: "center",
                position: "absolute",
                marginTop: 440,
                marginHorizontal: 49,
                width: 268,
                
                */
                marginTop: 20,
                height: projectsViewHeight,
                width: "100%",
                flex: 0,
                //zIndex: 5000,
              }}
            >
              <DropDownPicker
                items={teams2}
                multiple={true}
                multipleText="Participando de %d projetos"
                placeholder="Projetos que participa"
                defaultValue={activeProjects}
                zIndex={5000}
                style={styles.pickerStyle}
                containerStyle={styles.dropDownContainer}
                //dropDownStyle={styles.dropDownSt}
                itemStyle={styles.dropDownItem}
                labelStyle={styles.dropDownLabel}
                selectedtLabelStyle={styles.activeDataText}
                activeLabelStyle={styles.activeDataText}
                onChangeItem={(item) => setActiveProjects(item)}
                //dropDownMaxHeight={Math.min(maxDropDownItems) * containerHeight}

                dropDownMaxHeight={150}
                onOpen={
                  () => setProjectsViewHeight(200)
                  //setProjectsViewHeight((maxDropDownItems + 1) * containerHeight)
                }
                onClose={() => setProjectsViewHeight(50)}
                //onChangeList={(items) => setActiveProjects(items)}
                /**/
              />
            </View>
            <View
              style={{
                //display: "flex",
                //flexDirection: "row",
                //justifyContent: "center",
                /*
                position: "absolute",
                marginTop: 510,
                marginHorizontal: 49,
                width: 268,
                
                */
                height: departmentViewHeight,
                marginTop: 20,
                width: "100%",
                flex: 0,
                //zIndex: 5000,
              }}
            >
              <DropDownPicker
                items={departments2}
                //multiple={true}
                //multipleText="Participando de %d projetos"
                //zIndex={5000}
                defaultValue={department}
                placeholder="Departamento atual"
                //style={{ flexDirection: "row-reverse" }}
                zIndex={4000}
                style={styles.pickerStyle}
                containerStyle={styles.dropDownContainer}
                itemStyle={styles.dropDownItem}
                labelStyle={styles.dropDownLabel}
                selectedtLabelStyle={styles.activeDataText}
                activeLabelStyle={styles.activeDataText}
                onChangeItem={(item) => setDepartment(item.value)}
                //dropDownMaxHeight={Math.min(maxDropDownItems) * containerHeight}

                dropDownMaxHeight={150}
                onOpen={
                  () => setDepartmentViewHeight(200)
                  //setProjectsViewHeight((maxDropDownItems + 1) * containerHeight)
                }
                onClose={() => setDepartmentViewHeight(50)}
                //onChangeList={(items) => setActiveProjects(items)}
                /**/
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={images.logoutIcon.uri} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 174,
            height: 59,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1A0387",
            borderRadius: 67,
          }}
          onPress={() => {}}
        >
          <View>
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "roboto-bold",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Salvar
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image source={images.trashcanIcon.uri} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    //marginTop: -10,
    //alignItems: "center",
    //alignSelf: "center",
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

  scrollContent: {
    alignItems: "center",
  },

  scrollContainer: {
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
    //marginBottom: 20,
  },

  activeDataText: {
    color: colors.mainDark,
    fontFamily: "roboto-regular",
    fontSize: 14,
    textAlign: "center",
  },

  inactiveDataText: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    color: colors.mediumBlue,
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
    //flex: 1,
    //backgroundColor: "#fff",
    width: "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",

    height: 50,
    marginTop: 20,
  },

  halfDataContainer: {
    //marginTop: 20,
    marginHorizontal: 0,
    height: 50,
    width: "49%",
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
    //alignItems: "center",
    //justifyContent: "center",
    textAlign: "center",
  },
});

export default EditProfileScreen2;
