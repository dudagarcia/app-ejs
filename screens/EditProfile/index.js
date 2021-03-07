import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from "react-native";
import colors from "../../constants/colors";
import images from "../../constants/images";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInputMask } from "react-native-masked-text";
import moment from "moment";
import { ProfileStyles } from "../ViewProfile/ProfileStyles";
import {
  containerHeight,
  maxDropDownItems,
  dropdownItemHeight,
  marginsBetweenElements,
  dateFormat,
} from "../ViewProfile/ProfileConstants";
import ImagePicker from "./components/ImagePicker";
import { connect } from "react-redux";
import { updateUser } from "../../services/user";
import { updateProject } from "../../services/project";

const EditProfileScreen = (props) => {

  // Profile of this user
  const [user, setUser] = useState(props.user);

  // User Info
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [cellphone, setCellphone] = useState(String(user.phoneNumber));
  const [birthday, setBirthday] = useState(moment(user.birthDate).format("DD/MM/YYYY"));
  const [birthdayStyle, setBirthdayStyle] = useState(ProfileStyles.inactiveDataText);
  const [isValidBDay, setValidBDay] = useState(false);
  const [age, setAge] = useState(moment(birthday).fromNow().split(" ", 1)[0]);
  const [activeProjects, setActiveProjects] = useState([]);
  const [section, setSection] = useState(user.sectionId);
  const [role, setRole] = useState(user.roleId || 1);
  const [projectsViewHeight, setProjectsViewHeight] = useState(containerHeight);
  const [departmentViewHeight, setDepartmentViewHeight] = useState(containerHeight);
  const [profilePic, setProfilePic] = useState(images.simonAmazed.uri);

  // Dropdown Options
  const [sections, setSections] = useState(props.sections.map(item => {return {value: item.id, label: item.name, selected: item.id === user.sectionId} }));
  const [projects, setProjects] = useState(props.projects.active.map(getActiveProjects));

  function getActiveProjects (item) {
     return {value: item.id, label: item.name, selected: item.contributors.includes(`${user.id}`)}
  }

  const getDropDownMaxHeight = (items) => {
    return items.length * dropdownItemHeight + marginsBetweenElements;
  };

  const updImg = (newImage) => {
    if (!newImage.cancelled) {
      setProfilePic(newImage);
      const imageFile = await imageToBlob(newImage);
      const formData = new FormData();
      formData.append('imageFile', imageFile);
      handleUpdateUser(formData);
    }
  };

  const verifyUser = () => {
    if (props.otherUser) setUser(props.otherUser);
    else setUser(props.user);
  };

  const handleUpdateUser = async (formData) => {
  const userToUpdate = {
      name: name, 
      id: user.id, 
      sectionId: section,
      roleId: 1,
      phoneNumber: Number(cellphone.replace('(','').replace(')','').replace('-','').replace(' ','')),
      birthDate: moment(birthday).format('YYYY-MM-DD'),
      email: email,
      photo: formData
    }
   const res = await updateUser(userToUpdate);
   console.log(res);
    if(res.data.affectedRows === 1) {
      props.navigation.goBack();
      console.log("sim");
    } else console.log("nao");

    handleAddProject()
  };

  const handleAddProject = async () => {
    activeProjects.map(async item => {
      const proj = projects.filter(i => i.id === item)
      const projectToUpdate = {
        name: proj[0].name,
        status: proj[0].status,
        id: proj[0].id,
        description: proj[0].description,
        contributors: (proj[0].contributors)+`,${props.user.id}`
      }
       const res = await updateProject(projectToUpdate);
    })

  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      props.navigation.goBack();
    });
    verifyUser();
  }, []);

  return (
    <View style={ProfileStyles.body}>
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
          <View style={ProfileStyles.imagePicker}>
            <ImagePicker setImage={updImg} buttonIcon={images.cameraIcon.uri} />
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
              value={name}
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
              <Text style={birthdayStyle}>
                {isValidBDay ? `${age} anos` : "Idade"}
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
              value={email}
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
              value={cellphone}
            />
          </View>
          <View
            style={{
              marginTop: marginsBetweenElements,
              height: projectsViewHeight,
              width: "100%",
              flex: 0,
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
              itemStyle={ProfileStyles.dropDownItem}
              labelStyle={ProfileStyles.dropDownLabel}
              selectedtLabelStyle={ProfileStyles.activeDataText}
              activeLabelStyle={ProfileStyles.activeDataText}
              onChangeItem={(item) => setActiveProjects(item)}
              dropDownMaxHeight={getDropDownMaxHeight(projects)}
              onOpen={() =>
                setProjectsViewHeight(
                  getDropDownMaxHeight(projects) + containerHeight
                )
              }
              onClose={() => setProjectsViewHeight(containerHeight)}
            />
          </View>
          <View
            style={{
              height: departmentViewHeight,
              marginTop: marginsBetweenElements,
              width: "100%",
              flex: 0,
            }}
          >
            <DropDownPicker
              items={sections}
              defaultValue={sections[0].value}
              placeholder="Setor atual"
              zIndex={4000}
              style={ProfileStyles.pickerStyle}
              containerStyle={ProfileStyles.dropDownContainer}
              itemStyle={ProfileStyles.dropDownItem}
              labelStyle={ProfileStyles.dropDownLabel}
              selectedtLabelStyle={ProfileStyles.activeDataText}
              activeLabelStyle={ProfileStyles.activeDataText}
              onChangeItem={(item) => setSection(item.value)}
              dropDownMaxHeight={getDropDownMaxHeight(sections)}
              onOpen={() =>
                setDepartmentViewHeight(
                  getDropDownMaxHeight(sections) + containerHeight
                )
              }
              onClose={() => setDepartmentViewHeight(containerHeight)}
            />
          </View>
          <View style={ProfileStyles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
            >
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
              onPress={handleUpdateUser}
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
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  sections: state.sections,
  projects: state.projects
});

export default connect(mapStateToProps)(EditProfileScreen);
