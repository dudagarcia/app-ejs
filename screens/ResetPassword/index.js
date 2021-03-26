import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LogoImage, MainButton, Title, Input } from '../../components';
import Colors from '../../constants/colors';
import Images from '../../constants/images';
import { connect } from 'react-redux';
import { updatePassword } from '../../services/user';

const ResetPasswordScreen = props => {

    
    const [password, setPassword] = useState(null);
    const [samePasssword, setSamePassword] = useState(null);

    const changePassword = async () => {
        const {email} = route.params;
        console.log(JSON.stringify(email));
        const user = {
            password: password,
            email: JSON.stringify(email)
        }
        if(password === samePasssword){
            const response = await updatePassword(user);
            if(response.data.length === 1){
                console.log(response);
                props.navigation.navigate({ routeName: 'AlteredPassword' });
            }
            else{
                console.log("error");
            }
        }
        
    }
    
    return (
        <View style={styles.body}>
            <View style={styles.logo}>
                <LogoImage />
            </View>
            <Title style={styles.text}>Recuperação de conta</Title>
            <Input
                style={styles.inputText}
                image={Images.cadeado.uri}
                password={true}
                placeholder='Insira sua nova senha' 
                onChangeText={text => setPassword(text)}
            />

            <Input
                style={styles.inputText}
                image={Images.cadeado.uri}
                placeholder='Insira novamente a senha'
                password={true} 
                onChangeText={text => setSamePassword(text)}
            />
            <MainButton style={styles.button} title="Alterar senha" onPress={() => {
                changePassword();
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 155,
        height: 146,
        marginHorizontal: 125,
        marginTop: 10,
    },
    text: {
        color: "white",
        textAlign: "center",
        marginTop: 50,
        width: 356,
        height: 92,
        fontSize: 30,
        fontFamily: "roboto-bold",
    },
    logo: {
        width: 138,
        height: 138,
        marginTop: 30,
    },
    body: {
        backgroundColor: Colors.mainDark,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 190,
        height: 58,
        marginTop: 60,
        
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    }

});

const mapStateToProps = state => ({
    id: state.user.id
});

export default connect(mapStateToProps)(ResetPasswordScreen);
