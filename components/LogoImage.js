import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Images from '../constants/images';


const LogoImage = props => {
    return (
        <Image style={{...styles.image, ...props.style}} source={Images.logo.uri}/>
    );
};


const styles = StyleSheet.create({
    body:{
        width:'100%'
    },
    image: {
        width: 135,
        height: 135,
        borderRadius: 80
    }
});

export default LogoImage;
