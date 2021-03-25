import React from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ProfileStyles from "../../constants/constants/ProfileStyles";
import {
  containerHeight,
  marginsBetweenElements,
} from "../../constants/ProfileConstants";

const DepartmentsDropdown = (props) => {
  return (
    <View
      style={{
        /*
      position: "absolute",
      marginTop: 510,
      marginHorizontal: 49,
      width: 268,
      */
        height: props.departmentViewHeight,
        marginTop: marginsBetweenElements,
        width: "100%",
        flex: 0,
      }}
    >
      <DropDownPicker
        items={props.departments}
        defaultValue={props.selected_department}
        placeholder="Setor atual"
        zIndex={4000}
        style={ProfileStyles.pickerStyle}
        multiple={false}
        containerStyle={ProfileStyles.dropDownContainer}
        itemStyle={ProfileStyles.dropDownItem}
        labelStyle={ProfileStyles.dropDownLabel}
        selectedtLabelStyle={ProfileStyles.activeDataText}
        activeLabelStyle={ProfileStyles.activeDataText}
        onChangeItem={(item) => props.setDepartment(item.value)}
        //dropDownMaxHeight={Math.min(maxDropDownItems) * containerHeight}
        dropDownMaxHeight={props.dropDownMaxHeight}
        onOpen={() =>
          props.setDepartmentViewHeight(
            props.dropDownMaxHeight + containerHeight
          )
        }
        onClose={() => props.setDepartmentViewHeight(containerHeight)}
      />
    </View>
  );
};

export default DepartmentsDropdown;
