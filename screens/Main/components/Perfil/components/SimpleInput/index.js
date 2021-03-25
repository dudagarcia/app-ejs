import React from "react";
import { View, TextInput } from "react-native";
import colors from "../../../../../../constants/colors";
import ProfileStyles from "../../constants/ProfileStyles";

const SimpleInput = (props) => {
  return (
    <View style={{ ...ProfileStyles.dataContainer, ...props.viewStyle }}>
      <TextInput
        style={{ ...ProfileStyles.activeDataText, ...props.inputStyle }}
        placeholder={props.placeholder}
        placeholderTextColor={colors.mediumBlue}
        value={props.value}
        onChangeText={(text) => props.setValue(text)}
        editable={props.editable}
        {...props.inputProps}
      />
    </View>
  );
};

export default SimpleInput;
