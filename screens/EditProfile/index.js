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
  StyleSheet,
  ActivityIndicator
} from "react-native";
import colors from "../../constants/colors";
import images from "../../constants/images";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInputMask } from "react-native-masked-text";
import moment from "moment";
import { ProfileStyles } from "../ViewProfile/ProfileStyles";
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/colors';
import {
  containerHeight,
  maxDropDownItems,
  dropdownItemHeight,
  marginsBetweenElements,
  dateFormat,
} from "../ViewProfile/ProfileConstants";
import ImagePicker from "./components/ImagePicker";
import { connect, useDispatch } from "react-redux";
import { updateUser, searchUserById } from "../../services/user";
import { updateProject, listUserProjects } from "../../services/project";
import { isSignedIn } from '../../services/auth';
import { ADD_USER } from '../../redux/actions/actions';

const EditProfileScreen = props => {

  const dispatch = useDispatch()

  // Profile of this user
  const [user, setUser] = useState(props.user);

  // User Info
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [cellphone, setCellphone] = useState(String(user?.phoneNumber));
  const [birthday, setBirthday] = useState(moment(user?.birthDate, 'YYYY-MM-DD').format("DD/MM/YYYY"));
  const [birthdayStyle, setBirthdayStyle] = useState(ProfileStyles.inactiveDataText);
  const [isValidBDay, setValidBDay] = useState(false);
  const [age, setAge] = useState(moment(birthday).fromNow().split(" ", 1)[0]);
  const [activeProjects, setActiveProjects] = useState([]);
  const [section, setSection] = useState(user?.sectionId || 9);
  const [role, setRole] = useState(user?.roleId || 1);
  const [projectsViewHeight, setProjectsViewHeight] = useState(containerHeight);
  const [departmentViewHeight, setDepartmentViewHeight] = useState(containerHeight);
  const [profilePic, setProfilePic] = useState(images.simonAmazed.uri);
  const [myProjects, setMyProjects] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingProjs, setLoadingProjs] = useState(false);

  // Dropdown Options
  const [sections, setSections] = useState(props?.sections?.map(item => {return {value: item.id, label: item.name, selected: item.id === user.sectionId} }));
  const [projects, setProjects] = useState(props?.projects?.active.map(getActiveProjects));

  function getActiveProjects (item) {
     return {value: item.id, label: item.name, selected: item.contributors.includes(`${user.id}`)}
  }

  const getDropDownMaxHeight = (items) => {
    return items.length * dropdownItemHeight + marginsBetweenElements;
  };

  const updImg = async (newImage) => {
    if (!newImage.cancelled) {
      setProfilePic(newImage);
      const imageFile = await imageToBlob(newImage);
      const formData = new FormData();
      formData.append('imageFile', imageFile);
      handleUpdateUser(formData);
    }
  };

  const getAllUserProjects = async () => {
    setLoadingProjs(true)
    const { data } = await listUserProjects({ userId: props.user.id })
    setMyProjects(data)
    setLoadingProjs(false)
  }

  const searchLoggedUser = async () => {
    const userId = await isSignedIn();
    const response = await searchUserById({ id: userId});
    dispatch({ type: ADD_USER, payload: response.data[0]});
  }

  const verifyUser = () => {
    if (props.otherUser) setUser(props.otherUser);
    else setUser(props.user);
  };


  const handleUpdateUser = async (formData) => {
    setLoading(true);
  const userToUpdate = {
      name: name, 
      id: user.id, 
      sectionId: section,
      roleId: 1,
      phoneNumber: Number(cellphone.replace('(','').replace(')','').replace('-','').replace(' ','')),
      birthDate: moment(birthday, "DD/MM/YYYY").format("YYYY-MM-DD"),
      email: email
    }
   const res = await updateUser(userToUpdate);
   
    if(res.data.affectedRows === 1) {
      props.navigation.goBack();
      console.log("sim");
    } else console.log("nao");
    
    await searchLoggedUser();
    console.log("chegou aq")
    await handleAddProject();
    setLoading(false);
  };

  const handleAddProject = async () => {
    activeProjects?.map(async item => {
      const proj = projects.filter(i => i.id === item)
      console.log(proj)
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
    getAllUserProjects();
  }, []);

  return (
    <View style={ProfileStyles.body}>
      <View style={ProfileStyles.container}>
        <View style={ProfileStyles.logoContainer}>
          <View style={styles.foto}>
            <View style={ProfileStyles.logoBorda}>
              <View style={ProfileStyles.profilePictureContainer}>
                <Image
                  source={profilePic}
                  style={ProfileStyles.profilePictureStyle}
                />
              </View>
            </View>
          </View>
        
        </View>
        <View style={ProfileStyles.titleContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate({ routeName: "Main" })}>
            <Icon name="arrowleft" style={styles.icon} size={30}/>
          </TouchableOpacity>
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
            style={styles.projectsContainer}
          >
            <Text style={styles.projectsTitle}>Projetos que participa</Text>
            {
              loadingProjs ?
              <ActivityIndicator color={colors.mainDark}/>
              :
              myProjects.length > 0 ?
                myProjects.map(proj => {
                  return (
                    <View style={styles.projectContainer}>  
                      <Icon name="team" color="#fff"/>
                      <Text style={styles.projectTitle}>{proj.name}</Text>
                    </View>
                  
                  )
                })
              :
              <View style={styles.projectContainer}>
                <Text style={styles.projectTitle}>Poxa.. Ainda não tem projetos :c</Text>
              </View>
            }
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
              // defaultValue={section}
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
                props.navigation.navigate({ routeName: "LeaveAccount" });
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
                {
                  loading ?
                  <ActivityIndicator color="#fff"/>
                  :
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
                }

              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              props.navigation.navigate({ routeName: "DeleteAccount" })
            }}>
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

const styles = StyleSheet.create({
  icon:{
    color: Colors.mainDark,
  },
  foto:{
    marginLeft: 20,
  },
  projectsTitle: {
    color: colors.mainDark,
    textAlign: "center"
  },
  projectsContainer: {
    backgroundColor: colors.softBlue,
    borderRadius: 15,
    padding: 10,
    width: "100%",
    marginTop: marginsBetweenElements

  },
  projectContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
    alignItems: "center",
    width: "100%",
    alignSelf: 'center',
    backgroundColor: colors.lighterBlue,
    padding: 4,
    borderRadius: 20
  },
  projectTitle: {
    color: "#fff",
    marginLeft: 10,
  }
  
});

const mapStateToProps = (state) => ({
  user: state.user,
  sections: state.sections,
  projects: state.projects
});

export default connect(mapStateToProps)(EditProfileScreen);
