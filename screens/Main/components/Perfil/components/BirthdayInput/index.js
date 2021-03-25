import React from "react";
import { View } from "react-native";
import colors from "../../../../../../constants/colors";
import { TextInputMask } from "react-native-masked-text";
import moment from "moment";
import ProfileStyles from "../../constants/constants/ProfileStyles";
import { dateFormat } from "../../constants/ProfileConstants";

const BirthdayInput = (props) => {
  return (
    <View style={ProfileStyles.halfDataContainer}>
      <TextInputMask
        placeholder="D. Nascimento"
        placeholderTextColor={colors.mediumBlue}
        type={"datetime"}
        options={{
          format: dateFormat,
        }}
        //multiline={true}
        value={props.birthday}
        onChangeText={(text) => {
          props.setText(text);
        }}
        style={props.inputStyle}
        ref={(ref) => {
          if (ref && ref.isValid() && props.birthday.length === 10) {
            props.setValidInput(true);
            props.setInputStyle(ProfileStyles.activeDataText);
            props.setAge(
              moment().diff(moment(props.birthday, dateFormat), "years")
            );
          } else {
            props.birthday.length < 10
              ? props.setInputStyle(ProfileStyles.inactiveDataText)
              : props.setInputStyle(ProfileStyles.invalidDataText);
            props.setValidInput(false);
          }
        }}
        editable={props.editable}
      />
    </View>
  );
};

export default BirthdayInput;
