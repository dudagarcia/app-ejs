import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard, Text } from 'react-native';
import Colors from '../../constants/colors';
import DropDownPicker from "react-native-dropdown-picker";
import {
    containerHeight,
    dropdownItemHeight,
    marginsBetweenElements
}  from "../../screens/ViewProfile/ProfileConstants";
import { ProfileStyles } from "../../screens/ViewProfile/ProfileStyles";

const MultiplePicker = props => {

    const [members, setMembers] = useState([]);
    const [membersViewHeight, setMembersViewHeight] = useState(containerHeight);
    const [activeMembers, setActiveMembers] = useState([]);

    const people = [
        { value: "fulaninho", label: "fulaninho" },
        { value: "ciclaninho", label: "ciclaninho" },
        { value: "duda", label: "duda" },
        { value: "artur", label: "artur" },
        { value: "alguem", label: "alguem" },
    ];
    const getDropDownMaxHeight = (items) => {
        return (
          items.length * dropdownItemHeight + marginsBetweenElements
        );
    };


    return(
        <View style={styles.picker}>
            <DropDownPicker
                items={people}
                multiple={true}
                multipleText="%d diretores selecionados"
                placeholder="Selecionar diretores"
                defaultValue={members}
                zIndex={5000}
                style={ProfileStyles.pickerStyle}
                containerStyle={ProfileStyles.dropDownContainer}
                itemStyle={ProfileStyles.dropDownItem}
                labelStyle={ProfileStyles.dropDownLabel}
                selectedtLabelStyle={ProfileStyles.activeDataText}
                activeLabelStyle={ProfileStyles.activeDataText}
                onChangeItem={(item) => setActiveMembers(item)}
                dropDownMaxHeight={getDropDownMaxHeight(people)}
                onOpen={() =>
                    setMembersViewHeight(
                    getDropDownMaxHeight(people) + containerHeight
                  )
                }
                onClose={() => setMembersViewHeight(containerHeight)}
              />
        </View>
    );
};

const styles = StyleSheet.create({
    picker:{
        marginTop: marginsBetweenElements,
        width: "82%",
        flex: 0
    }
});

export default MultiplePicker;
