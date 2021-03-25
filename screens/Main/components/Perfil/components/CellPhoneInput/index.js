import React from "react";
import { View } from "react-native";
import colors from "../../../../../../constants/colors";
import { TextInputMask } from "react-native-masked-text";
import ProfileStyles from "../../constants/ProfileStyles";

const CellPhoneInput = (props) => {
  return (
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
        onChangeText={(text) => props.setText(text)}
        value={props.cellphone}
        editable={props.editable}
      />
    </View>
  );
};

export default CellPhoneInput;
