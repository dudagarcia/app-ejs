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

    const [membersViewHeight, setMembersViewHeight] = useState(containerHeight);

    const getDropDownMaxHeight = (items) => {
        return (
          items.length * dropdownItemHeight + marginsBetweenElements
        );
    };


    return(
        <View style={styles.body}>
            <View style={styles.picker}>
                <DropDownPicker
                    items={props.data}
                    multiple={true}
                    multipleText="%d usuários selecionados"
                    placeholder={props.placeholder}
                    defaultValue={props?.defaultValue || 1}
                    zIndex={5000}
                    style={ProfileStyles.pickerStyle}
                    containerStyle={ProfileStyles.dropDownContainer}
                    itemStyle={ProfileStyles.dropDownItem}
                    labelStyle={ProfileStyles.dropDownLabel}
                    selectedtLabelStyle={ProfileStyles.activeDataText}
                    activeLabelStyle={ProfileStyles.activeDataText}
                    onChangeItem={(item) => props.setContributors(item)}
                    dropDownMaxHeight={getDropDownMaxHeight(props.data)}
                    onOpen={() =>
                        setMembersViewHeight(
                        getDropDownMaxHeight(props.data) + containerHeight
                    )
                    }
                    onClose={() => setMembersViewHeight(containerHeight)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    picker:{
        marginTop: marginsBetweenElements,
        flex: 0
    },
    body:{
        width: 266,
    }
});

export default MultiplePicker;
