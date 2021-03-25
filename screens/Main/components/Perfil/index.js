import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, BackHandler } from "react-native";
import { colors, screenSize, images } from "../../../../constants";
//import images from "../../constants/images";
import moment from "moment";
import { ProfileStyles } from "./constants/ProfileStyles";
import {
  containerHeight,
  maxDropDownItems,
  dropdownItemHeight,
  marginsBetweenElements,
  dateFormat,
} from "./constants/ProfileConstants";
import {
  BirthdayInput,
  CellPhoneInput,
  DepartmentsDropdown,
  ProjectsDropdown,
  ImagePicker,
  ProfileEditButtons,
  SimpleInput,
  EditButton,
} from "./components";
import { connect } from "react-redux";
import { updateUser } from "../../../../services/user";
import { updateProject } from "../../../../services/project";

const Perfil = (props) => {
  const [editable, setEditable] = useState(props.edit ? true : false);

  // Profile of this user
  const [user, setUser] = useState(props.user);

  // User Info
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [cellphone, setCellphone] = useState(String(user.phoneNumber));
  const [birthday, setBirthday] = useState(
    moment(user.birthDate).format("DD/MM/YYYY")
  );
  const [birthdayStyle, setBirthdayStyle] = useState(
    ProfileStyles.inactiveDataText
  );
  const [isValidBDay, setValidBDay] = useState(false);
  const [age, setAge] = useState(moment(birthday).fromNow().split(" ", 1)[0]);
  const [activeProjects, setActiveProjects] = useState([]);
  const [section, setSection] = useState(user.sectionId);
  const [role, setRole] = useState(user.roleId || 1);
  const [projectsViewHeight, setProjectsViewHeight] = useState(containerHeight);
  const [departmentViewHeight, setDepartmentViewHeight] = useState(
    containerHeight
  );
  const [profilePic, setProfilePic] = useState(images.simonAmazed.uri);

  // Dropdown Options
  const [sections, setSections] = useState(
    props.sections.map((item) => {
      return {
        value: item.id,
        label: item.name,
        selected: item.id === user.sectionId,
      };
    })
  );
  const [projects, setProjects] = useState(
    props.projects.active.map(getActiveProjects)
  );

  function getActiveProjects(item) {
    return {
      value: item.id,
      label: item.name,
      selected: item.contributors.includes(`${user.id}`),
    };
  }

  const getDropDownMaxHeight = (items) => {
    return items.length * dropdownItemHeight + marginsBetweenElements;
  };

  const updImg = async (newImage) => {
    if (!newImage.cancelled) {
      setProfilePic(newImage);
      const imageFile = await imageToBlob(newImage);
      const formData = new FormData();
      formData.append("imageFile", imageFile);
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
      phoneNumber: Number(
        cellphone
          .replace("(", "")
          .replace(")", "")
          .replace("-", "")
          .replace(" ", "")
      ),
      birthDate: moment(birthday).format("YYYY-MM-DD"),
      email: email,
      photo: formData,
    };
    const res = await updateUser(userToUpdate);

    if (res.data.affectedRows === 1) {
      props.navigation.goBack();
      console.log("sim");
    } else console.log("nao");

    handleAddProject();
  };

  const handleAddProject = async () => {
    activeProjects.map(async (item) => {
      const proj = projects.filter((i) => i.id === item);
      const projectToUpdate = {
        name: proj[0].name,
        status: proj[0].status,
        id: proj[0].id,
        description: proj[0].description,
        contributors: proj[0].contributors + `,${props.user.id}`,
      };
      const res = await updateProject(projectToUpdate);
    });
  };

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
          <SimpleInput
            setValue={(text) => {
              setName(text);
            }}
            placeholder="Nome"
            value={name}
            editable={editable}
          />

          <View style={ProfileStyles.rowContainer}>
            <BirthdayInput
              birthday={birthday}
              setText={setBirthday}
              inputStyle={birthdayStyle}
              setValidInput={setValidBDay}
              setInputStyle={setBirthdayStyle}
              setAge={setAge}
              editable={editable}
            />

            <View style={ProfileStyles.halfDataContainer}>
              <Text style={birthdayStyle}>
                {isValidBDay ? `${age} anos` : "Idade"}
              </Text>
            </View>
          </View>

          <SimpleInput
            setValue={(text) => {
              setEmail(text);
            }}
            placeholder="Email"
            inputProps={{ autoCapitalize: "none" }}
            editable={editable}
          />

          <CellPhoneInput
            setText={setCellphone}
            editable={editable}
            value={cellphone}
          />

          <ProjectsDropdown
            projectsViewHeight={projectsViewHeight}
            projects={projects}
            activeProjects={activeProjects}
            setActiveProjects={setActiveProjects}
            dropDownMaxHeight={getDropDownMaxHeight(projects)}
            setProjectsViewHeight={setProjectsViewHeight}
          />
          <DepartmentsDropdown
            departmentViewHeight={departmentViewHeight}
            departments={sections}
            selected_department={section}
            setDepartment={setSection}
            dropDownMaxHeight={getDropDownMaxHeight(sections)}
            setDepartmentViewHeight={setDepartmentViewHeight}
          />

          <View style={ProfileStyles.buttonsContainer}>
            {editable ? (
              <ProfileEditButtons handleUpdateUser={handleUpdateUser} />
            ) : (
              <EditButton onPress={setEditable} />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  sections: state.sections,
  projects: state.projects,
});

export default connect(mapStateToProps)(Perfil);
