import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';

const MenuItem = (props) => {

    const [image, setImage] = useState(props.imageNotSelected);

    useEffect( () =>{
        if(props.selectedMenuItem === props.title) setImage(props.image);
        else setImage(props.imageNotSelected)
    });


    return (
        <TouchableOpacity key='Teste' onPress={props.onClick}>
            <View style={styles.mainContainer} onPress={() => props.navigation.navigate('ViewProfile')}>
                <View  style={styles.fullItemContainer}>
                    <Image
                        source={props.image}
                        style={styles.image}

                    />
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                
                <Image
                        source={image}
                        style={{...styles.image, ...{display: props.smallMenuDisplay}}}

                    />

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6,

    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        color: '#1A0387'
    },
    fullItemContainer: {
        display: 'flex',
        flexDirection: 'row'
    }


});

export default MenuItem;