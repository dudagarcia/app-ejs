import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { images } from '../../../../../../constants';


const ButtonConfig = (props) => {
  return(
    <TouchableOpacity 
        style={styles.button} 
        onPress={props.onPress}>
        <Image style={styles.buttonImage} source={images.editIcon.uri}/>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({

button: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: "#fff",
    marginLeft: 20
},
buttonImage: {
    width: 55,
    height: 55,
}
});
export default ButtonConfig;