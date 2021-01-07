import React from 'react';

import { StyleSheet, View, Text, Image, Button, ImageBackground } from 'react-native';

import colors from '../constants/colors';

import images from '../constants/images';

import MenuItem from '../components/MenuItem';


const MainScreen = () => {

    return (
        <View style={styles.body}>
            <ImageBackground source={images.backgroundMain.uri} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoBorda}>
                            <Image
                                source={images.simonAmazed.uri}
                                style={styles.image}
                            />
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.usernameContainer} >
                            <Text style={styles.username}>Olá, User!</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <View style={styles.menu}>
                                <MenuItem title='Perfil' imageSource={images.email.uri} />
                                <MenuItem title='Tarefas' imageSource={images.email.uri} />
                                <MenuItem title='Disponibilidades' imageSource={images.email.uri} />
                                <MenuItem title='Agenda' imageSource={images.email.uri} />
                            </View>
                        </View>

                    </View>

                </View>
            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    body: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',

    },

    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        marginTop: -60,
        marginLeft: 130
    },

    logoBorda: {
        display: 'flex',
        backgroundColor: '#4F7DDF',
        borderRadius: 100,
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center'
    },

    usernameContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },

    username: {
        color: colors.mainDark,
        fontSize: 20
    },

    image: {
        width: 120,
        height: 120,

    },

    container: {
        backgroundColor: '#fff',
        marginRight: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        shadowColor: '#fff',
        shadowRadius: 5,
        elevation: 8,
        height: 600,
        marginTop: 60
    },

    contentContainer: {
        marginTop: 40,
    },

    menu: {
        marginTop: 70
    },

    menuContainer: {
    },

    usernameContainer: {
        marginTop: 20,
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    }


});

export default MainScreen;