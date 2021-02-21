import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlueTitle, InputProfile, BlueButton, MultiplePicker, SingularPicker } from '../../../../../../components';
import { connect } from 'react-redux';
import { createSection } from '../../../../../../services/section';

const AdicionarSetor = props => {
    
    const [name, setName] = useState("");
    const [manager, setManager] = useState("");
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendForm = async () => {
        isLoading(true);
        const sectionInfo = {
            name: name, 
            manager: manager
        }
        const response = await createSection(sectionInfo);
        if(response.data.affectedRows === 1){
            setSuccess(true);
            props.setAddSetor(false);
        }
        else{
            setError(true);
        }
    }
    
    return (
        <View style={styles.view}>
            <InputProfile text="Nome do setor" style={styles.input} onChangeText={text => setName(text)}/>
            <SingularPicker data={props.users.allUsers} placeholder="Selecionar Diretor" setPicker={setManager}/>
            <BlueButton style={styles.button} title="Salvar" onPress={() => sendForm()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        marginTop: 20
    },
    title:{
        marginBottom:85
    },
    view:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:100
    },
    input:{
        marginTop: 25
    },
    button:{
        marginTop: 400,
        position:'absolute'
    }    
});

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(AdicionarSetor);