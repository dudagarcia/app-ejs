import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import colors from '../../constants/colors';
import images from '../../constants/images';
import { Input, LogoImage, Title, MainButton } from '../../components';
import { updateCode } from '../../services/user';
import { connect } from 'react-redux';

const AccountScreen = props => {

    const [email, setEmail] = useState(null);

    const sendEmail = async () => {
        const user = {
            id: props.id
        }
        const response = await updateCode(user);
        if(response.data.length === 1){
            console.log(response);
            props.navigation.navigate({ routeName: 'ResetPassword'});
        }
        else{
            console.log("error");
        }
    }


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
                onChangeText={(text) => setEmail(text)}
            />
            <MainButton
                style={styles.button}
                title='Alterar senha'
                onPress={() => { 
                    props.navigation.navigate('ResetPassword', { email: email });
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

const mapStateToProps = state => ({
    id: state.user.id
})

export default connect(mapStateToProps)(AccountScreen);