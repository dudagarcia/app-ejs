import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native-gesture-handler';

const LoginButton = (props) => {
  return(
      <TouchableOpacity style={{...props.style,...styles.container}} onPress={props.onPress}>
          {props.children}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 25,
        width: 140,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default LoginButton;