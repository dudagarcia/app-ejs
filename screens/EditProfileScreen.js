import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

import colors from "../constants/colors";
import MainButton from "../components/MainButton";
import images from "../constants/images";
//import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
//import DynamicPicker from "../components/DynamicPicker";

//import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInputMask } from "react-native-masked-text";
import moment from "moment";
import { ProfileStyles } from "../constants/ProfileStyles";
import {
  containerHeight,
  maxDropDownItems,
  dropdownItemHeight,
  marginsBetweenElements,
  dateFormat,
} from "../constants/ProfileConstants";
import ImagePickerComponent from "../components/ImagePicker";

//import * as ImagePicker from "expo-image-picker";
//import Constants from "expo-constants";
//import * as Permissions from "expo-permissions";

const EditProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");

  const [birthday, setBirthday] = useState("");
  const [birthdayStyle, setBirthdayStyle] = useState(
    ProfileStyles.inactiveDataText
  );
  const [isValidBDay, setValidBDay] = useState(false);
  const [age, setAge] = useState(0);

  const [activeProjects, setActiveProjects] = useState([]);
  const [department, setDepartment] = useState("");
  const [projectsViewHeight, setProjectsViewHeight] = useState(containerHeight);
  const [departmentViewHeight, setDepartmentViewHeight] = useState(
    containerHeight
  );

  const [profilePic, setProfilePic] = useState(images.simonAmazed.uri);

  const departments = [
    { value: "Projetos", label: "Projetos" },
    { value: "Marketing", label: "Marketing" },
    { value: "Vendas", label: "Vendas" },
    { value: "Financas e Pessoas", label: "Finanças e Pessoas" },
    { value: "Presidência", label: "Presidência" },
  ];

  const projects = [
    { value: "App-EJs", label: "App-EJs" },
    { value: "Doula", label: "Doula" },
    { value: "Ecommerce", label: "Ecommerce" },
    { value: "Estoque", label: "Estoque" },
    { value: "Vidraceiros", label: "Vidraceiros" },
  ];

  const getDropDownMaxHeight = (items) => {
    return (
      //Math.min(maxDropDownItems, items.length) * dropdownItemHeight +
      items.length * dropdownItemHeight + marginsBetweenElements
    );
  };

  const updImg = (newImage) => {
    if (!newImage.cancelled) {
      //console.log(newImage);
      setProfilePic(newImage);
    }
  };

  /*
  console.log(
    name,
    department,
    activeProjects,
    birthday,
    isValidBDay,
    age,
    email,
    cellphone
  );
  */

  return (
    <View style={ProfileStyles.body}>
      <ImageBackground
        source={images.backgroundMain.uri}
        style={ProfileStyles.backgroundImage}
      >
        <View style={ProfileStyles.container}>
          <View style={ProfileStyles.logoContainer}>
            <View style={ProfileStyles.logoBorda}>
              <View style={ProfileStyles.profilePictureContainer}>
                <Image
                  source={profilePic}
                  style={ProfileStyles.profilePictureStyle}
                />
              </View>
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
              <TextInput
                style={ProfileStyles.activeDataText}
                placeholder="Nome"
                placeholderTextColor={colors.mediumBlue}
                onChangeText={(text) => setName(text)}
              />
            </View>

            <View style={ProfileStyles.rowContainer}>
              <View style={ProfileStyles.halfDataContainer}>
                <TextInputMask
                  placeholder="D. Nascimento"
                  placeholderTextColor={colors.mediumBlue}
                  type={"datetime"}
                  options={{
                    format: dateFormat,
                  }}
                  value={birthday}
                  onChangeText={(text) => {
                    setBirthday(text);
                  }}
                  style={birthdayStyle}
                  ref={(ref) => {
                    if (ref && ref.isValid() && birthday.length === 10) {
                      setValidBDay(true);
                      setBirthdayStyle(ProfileStyles.activeDataText);
                      setAge(
                        moment().diff(moment(birthday, dateFormat), "years")
                      );
                    } else {
                      birthday.length < 10
                        ? setBirthdayStyle(ProfileStyles.inactiveDataText)
                        : setBirthdayStyle(ProfileStyles.invalidDataText);
                      setValidBDay(false);
                    }
                  }}
                />
              </View>

              <View style={ProfileStyles.halfDataContainer}>
                <Text
                  style={birthdayStyle}
                  //placeholder="Idade"
                  //placeholderTextColor={colors.mainDark}
                >
                  {isValidBDay ? age : "Idade"}
                </Text>
              </View>
            </View>

            <View style={ProfileStyles.dataContainer}>
              <TextInput
                style={ProfileStyles.activeDataText}
                placeholder="E-mail"
                placeholderTextColor={colors.mediumBlue}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
              />
            </View>
            <View style={ProfileStyles.dataContainer}>
              <TextInputMask
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                }}
                style={ProfileStyles.activeDataText}
                placeholder="Celular"
                placeholderTextColor={colors.mediumBlue}
                onChangeText={(text) => setCellphone(text)}
              />
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
                marginTop: marginsBetweenElements,
                height: projectsViewHeight,
                width: "100%",
                flex: 0,
                //zIndex: 5000,
              }}
            >
              <DropDownPicker
                placeholderTextColor
                items={projects}
                multiple={true}
                multipleText="Participando de %d projetos"
                placeholder="Projetos que participa"
                defaultValue={activeProjects}
                zIndex={5000}
                style={ProfileStyles.pickerStyle}
                containerStyle={ProfileStyles.dropDownContainer}
                //dropDownStyle={styles.dropDownSt}
                itemStyle={ProfileStyles.dropDownItem}
                labelStyle={ProfileStyles.dropDownLabel}
                selectedtLabelStyle={ProfileStyles.activeDataText}
                activeLabelStyle={ProfileStyles.activeDataText}
                onChangeItem={(item) => setActiveProjects(item)}
                dropDownMaxHeight={getDropDownMaxHeight(projects)}
                //dropDownMaxHeight={3 * containerHeight}
                onOpen={() =>
                  //setProjectsViewHeight(4 * containerHeight)
                  setProjectsViewHeight(
                    getDropDownMaxHeight(projects) + containerHeight
                  )
                }
                onClose={() => setProjectsViewHeight(containerHeight)}
              />
            </View>
            <View
              style={{
                /*
                position: "absolute",
                marginTop: 510,
                marginHorizontal: 49,
                width: 268,
                */
                height: departmentViewHeight,
                marginTop: marginsBetweenElements,
                width: "100%",
                flex: 0,
              }}
            >
              <DropDownPicker
                items={departments}
                defaultValue={department}
                placeholder="Setor atual"
                zIndex={4000}
                style={ProfileStyles.pickerStyle}
                containerStyle={ProfileStyles.dropDownContainer}
                itemStyle={ProfileStyles.dropDownItem}
                labelStyle={ProfileStyles.dropDownLabel}
                selectedtLabelStyle={ProfileStyles.activeDataText}
                activeLabelStyle={ProfileStyles.activeDataText}
                onChangeItem={(item) => setDepartment(item.value)}
                //dropDownMaxHeight={Math.min(maxDropDownItems) * containerHeight}

                dropDownMaxHeight={getDropDownMaxHeight(departments)}
                onOpen={
                  () =>
                    setDepartmentViewHeight(
                      getDropDownMaxHeight(departments) + containerHeight
                    )
                  //setProjectsViewHeight((maxDropDownItems + 1) * containerHeight)
                }
                onClose={() => setDepartmentViewHeight(containerHeight)}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <View style={ProfileStyles.buttonsContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={images.logoutIcon.uri}
            style={ProfileStyles.buttonIcon}
          />
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
          <Image
            source={images.trashcanIcon.uri}
            style={ProfileStyles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 125,
          marginLeft: Dimensions.get("window").width * 0.54,
          //marginLeft: "53%",
          //marginRight: "38%",
          position: "absolute",
          zIndex: 3000,
          width: 32,
          height: 32,
        }}
      >
        <ImagePickerComponent
          setImage={updImg}
          buttonIcon={images.cameraIcon.uri}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
