import React from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ProfileStyles from "../../constants/constants/ProfileStyles";
import {
  containerHeight,
  marginsBetweenElements,
} from "../../constants/ProfileConstants";

const ProjectsDropdown = (props) => {
  return (
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
        height: props.projectsViewHeight,
        width: "100%",
        flex: 0,
      }}
    >
      <DropDownPicker
        placeholderTextColor
        items={props.projects}
        multiple={true}
        multipleText="Participando de %d projetos"
        placeholder="Projetos que participa"
        defaultValue={props.activeProjects}
        zIndex={5000}
        style={ProfileStyles.pickerStyle}
        containerStyle={ProfileStyles.dropDownContainer}
        //dropDownStyle={styles.dropDownSt}
        itemStyle={ProfileStyles.dropDownItem}
        labelStyle={ProfileStyles.dropDownLabel}
        selectedtLabelStyle={ProfileStyles.activeDataText}
        activeLabelStyle={ProfileStyles.activeDataText}
        onChangeItem={(item) => props.setActiveProjects(item)}
        dropDownMaxHeight={props.dropDownMaxHeight}
        //dropDownMaxHeight={3 * containerHeight}
        onOpen={() =>
          //setProjectsViewHeight(4 * containerHeight)
          props.setProjectsViewHeight(props.dropDownMaxHeight + containerHeight)
        }
        onClose={() => props.setProjectsViewHeight(containerHeight)}
      />
    </View>
  );
};

export default ProjectsDropdown;
