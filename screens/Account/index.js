import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import colors from '../../constants/colors';
import images from '../../constants/images';
import { Input, LogoImage, Title, MainButton } from '../../components';

const AccountScreen = props => {

    return (
        <View style={styles.body}>
            <LogoImage />
            <Title style={styles.title}>Recuperação de Conta</Title>
            <Image
                style={styles.image}
                source={images.simonStudying.uri}
            />
            <Input
                style={styles.input}
                image={images.email.uri}
                password={false}
                placeholder='Email Corporativo'
            />
            <MainButton
                style={styles.button}
                title='Enviar email para alterar senha'
                onPress={() => { 
                    props.navigation.navigate({ routeName: 'ConfirmEmail'});
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    body: {
        backgroundColor: colors.mainDark,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        marginTop: 70,
        width: '45%',
        paddingHorizontal: 15,
        height: 55,
        textAlign: 'center',

    },
    image: {
        marginTop: 70,
        width: 120,
        height: 90,

    },
    input: {
        marginTop: 40,

    },
    title: {
        fontWeight: 'bold'
    }

});

export default AccountScreen;