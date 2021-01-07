import React from 'react';

import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import images from '../constants/images';

const MenuItem = (props) => {

    return (
        <TouchableOpacity >
            <View style={styles.mainContainer}>
                <Image
                    source={props.imageSource}
                    style={styles.image}
                />
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 6

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
    }


});

export default MenuItem;