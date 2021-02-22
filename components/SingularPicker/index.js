import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    containerHeight,
    dropdownItemHeight,
    marginsBetweenElements
}  from "../../screens/ViewProfile/ProfileConstants";
import { ProfileStyles } from "../../screens/ViewProfile/ProfileStyles";

const SingularPicker = props => {
    
    
    const [viewHeight, setViewHeight] = useState(containerHeight);


    const getDropDownMaxHeight = (items) => {
        return (
          items.length * dropdownItemHeight + marginsBetweenElements
        );
      };

    
    return(
        <View style={styles.body}>
            <View
                style={{
                    height: viewHeight,
                    marginTop: marginsBetweenElements,
                    width: "100%",
                    flex: 0,
                }}
            >
                <DropDownPicker
                    items={props.data}
                    defaultValue={props.status}
                    placeholder={props.placeholder}
                    zIndex={4000}
                    style={ProfileStyles.pickerStyle}
                    containerStyle={ProfileStyles.dropDownContainer}
                    itemStyle={ProfileStyles.dropDownItem}
                    labelStyle={ProfileStyles.dropDownLabel}
                    selectedtLabelStyle={ProfileStyles.activeDataText}
                    activeLabelStyle={ProfileStyles.activeDataText}
                    onChangeItem={(item) => props.setPicker(item.value)}
                    dropDownMaxHeight={getDropDownMaxHeight(props.data)}
                    onOpen={
                    () =>
                        setViewHeight(
                        getDropDownMaxHeight(props.data) + containerHeight
                        )
                    }
                    onClose={() => setViewHeight(containerHeight)}
                />
            </View>
        </View>
    );
    
    
}

const styles = StyleSheet.create({
    body:{
        width: 266
    }
});

export default SingularPicker;