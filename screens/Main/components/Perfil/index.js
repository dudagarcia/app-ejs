import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Images from '../../../../constants/images';

const Perfil = () => {
  return(
      <View>
          <Image source={Images.simonAmazed.uri} style={styles.simon}/>
      </View>
  );
}

const styles = StyleSheet.create({
  simon:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 75,
    marginTop: 190
  }
});

export default Perfil;