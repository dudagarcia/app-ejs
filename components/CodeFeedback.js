import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Images from '../constants/images';

const CodeFeedback = props => {
    if(props.correct){
        return(
            <View style={styles.body_correct}> 
                <Text style={styles.text}>Código correto!</Text>
                <Image style={styles.image} source={Images.simonSmile.uri}/>
            </View>
        );
    }
    if(!props.correct){
        return(
            <View style={[styles.body_correct, styles.body_incorrect]}> 
                <Text style={styles.text}>Código incorreto!</Text>
                <Image style={styles.image} source={Images.simonIrritado.uri}/>
            </View>
        );
    }
    
};

const styles = StyleSheet.create({
    body_correct:{
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 14,
        width: 280,
        height: 45,
        backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 120
    },
    body_incorrect:{
        backgroundColor: 'red'
    },
    text:{
        fontFamily: 'roboto-bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 26
    },
    image:{
        width: 85,
        height: 94,
        marginTop: 20
    }
});

export default CodeFeedback;