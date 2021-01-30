import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../../../../constants/colors';
import images from '../../../../constants/images';
import { NoTarefas, Tarefas, NewTarefaButton, OptionsButton, TextButton, ModalAddTarefa } from './Components';

const MinhasTarefas = (props) => {

    const [tarefas, setTarefas] = useState(<NoTarefas />);
    const [teste, setTeste] = useState('aaa');
    const [modalAddTarefaVisible, setModalAddTarefaVisible] = useState(false);

    const closeModal = () =>{
        setModalAddTarefaVisible(false);
    }

    return (
        <>
            <ModalAddTarefa 
                modalAddTarefaVisible={modalAddTarefaVisible}
                closeModal={closeModal}
            />
            <Modal
                animationType="fade"
                visible={false}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.newTarefaContainer}>
                        <View style={styles.modalContainer}>
                            <Tarefas />
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Minhas Tarefas</Text>
                </View>
                <View style={styles.tarefasContainer}>
                    {tarefas}
                </View>
                <View style={styles.buttonContainer}>
                    <NewTarefaButton buttonDisplay={props.buttonDisplay} onPress={() => { setModalAddTarefaVisible(true) }} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    title: {
        color: colors.mainDark,
        fontWeight: 'bold',
        fontSize: 20
    },

    tarefasContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

    },

    buttonContainer: {
        position: 'absolute',
        marginTop: 515,
        display: 'flex',
        alignSelf: 'center'
    },


});



export default MinhasTarefas;