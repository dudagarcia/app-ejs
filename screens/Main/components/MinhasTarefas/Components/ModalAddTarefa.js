import React, { useState } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';
import { OptionsButton } from './';
import images from '../../../../../constants/images';
import { TextButton } from '../../../../../components';


const ModalAddTarefa = (props) => {

    const [display, setDisplay] = useState('flex');

    return (
        <Modal
            animationType="fade"
            visible={props.modalAddTarefaVisible}
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={{...styles.newTarefaContainer, ...{display: display}}}>
                    <View style={styles.inputNameContainer}>
                        <TextInput
                            style={styles.inputName}
                            placeholder='Nova Tarefa'
                            placeholderTextColor='rgba(255, 255, 255, 0.56)' 
                        />
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
                            <OptionsButton
                                image={images.agendaTarefasIcon.uri}
                                onPress={()=>setDisplay('none')}
                            />
                            <OptionsButton
                                image={images.addMemberIcon.uri}
                            />
                        </View>
                        <TextButton title='Salvar' onPress={props.closeModal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(28, 28, 28, 0.6)'
    },

    newTarefaContainer: {
        backgroundColor: '#4F7DDF',
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

export default ModalAddTarefa;