import React, { useState, useRef } from 'react';

import { StyleSheet, View, Text, Image, Animated, ImageBackground, Button } from 'react-native';

import colors from '../constants/colors';

import images from '../constants/images';

import MenuItem from '../components/MenuItem';


const MainScreen = () => {

    const [menuScaleX, setMenuPosition] = useState(new Animated.Value(1));

    const menuOpacity = useRef(new Animated.Value(1)).current;

    const onPressTiming = () => {
        Animated.timing(menuOpacity, {toValue: 0, duration: 500}).start()
        Animated.timing(menuScaleX, { toValue: 2, duration: 1000 }).start()
    }

    return (
        <View style={styles.body}>
            <ImageBackground source={images.backgroundMain.uri} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoBorda}>
                            <Image
                                source={images.logo.uri}
                                style={styles.image}
                            />
                        </View>
                    </View>
                    <Animated.View style={{...styles.contentContainer, ...{transform: [{ scaleX: menuScaleX }]}}}>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>Olá, User!</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <Animated.View style={{...styles.menu, opacity: menuOpacity}}>
                                <MenuItem title='Perfil' imageSource={images.perfilIcon.uri} onClick={onPressTiming} />
                                <MenuItem title='Tarefas' imageSource={images.tarefasIcon.uri}/>
                                <MenuItem title='Disponibilidades' imageSource={images.disponibilidadeIcon.uri} />
                                <MenuItem title='Agenda' imageSource={images.agendaIcon.uri} />
                            </Animated.View>
                        </View>
                    </Animated.View>

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
        marginTop: -70,
        marginLeft: 115
    },

    logoBorda: {
        display: 'flex',
        backgroundColor: '#4F7DDF',
        borderRadius: 100,
        width: 150,
        height: 150,
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
        fontSize: 24
    },

    image: {
        width: 135,
        height: 135,
        borderRadius: 100,

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
        marginTop: 28,
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    }


});

export default MainScreen;