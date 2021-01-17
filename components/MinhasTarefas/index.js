import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../../constants/colors';
import images from '../../constants/images';
import { NoTarefas, Tarefas, NewTarefaButton, OptionsButton, TextButton } from './Components';

const MinhasTarefas = (props) => {

    const [tarefas, setTarefas] = useState(<NoTarefas />);
    const [teste, setTeste] = useState('aaa');
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <>
            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.newTarefaContainer}>
                        <View style={styles.inputNameContainer}>
                            <TextInput
                                style={styles.inputName}
                                placeholder='Nova Tarefa'
                                placeholderTextColor='rgba(255, 255, 255, 0.56)' />
                        </View>
                        <View style={styles.inputDetailsContainer}>
                            <TextInput
                                placeholder='Adicionar Detalhes'
                                style={styles.inputDetails}
                                placeholderTextColor='rgba(255, 255, 255, 0.56)'
                            />
                        </View>
                        <View style={styles.buttonsTarefaContainer}>
                            <View style={styles.buttonsIconsContainer}>
                                <OptionsButton image={images.agendaTarefasIcon.uri} />
                                <OptionsButton image={images.addMemberIcon.uri} />
                            </View>
                            <TextButton title='Salvar' onPress={()=>{setModalVisible(false)}}/>
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
                    <NewTarefaButton buttonDisplay={props.buttonDisplay} onPress={()=>{setModalVisible(true)}}/>
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

    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(28, 28, 28, 0.6)'
    },

    newTarefaContainer: {
        backgroundColor: '#4F7DDF',
        height: 170,
        borderTopStartRadius: 30,
        borderTopRightRadius: 30,
        padding: 30

    },

    inputNameContainer: {
        borderLeftWidth: 4,
        borderLeftColor: 'rgba(255, 255, 255, 0.56)',
        paddingLeft: 15,
    },

    inputName: {
        fontSize: 20,
        color: 'rgba(255, 255, 255, 0.56)'
    },

    inputDetailsContainer: {
        marginTop: 15,
        borderLeftWidth: 3,
        borderLeftColor: 'rgba(255, 255, 255, 0.56)',
        paddingLeft: 15,
    },

    inputDetails: {
        fontSize: 17,
        color: 'rgba(255, 255, 255, 0.56)'
    },

    buttonsTarefaContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    buttonsIconsContainer: {
        display: 'flex',
        flexDirection: 'row'
    }



});



export default MinhasTarefas;