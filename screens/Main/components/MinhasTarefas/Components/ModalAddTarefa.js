import React, { useState, useEffect } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';
import { OptionsButton } from './';
import images from '../../../../../constants/images';
import { TextButton } from '../../../../../components';
import ModalAddData from './ModalAddData';
import ModalAddUsers from './ModalAddUsers';
import { createTask } from '../../../../../services/task';
import { connect } from 'react-redux';

const ModalAddTarefa = (props) => {

    const [display, setDisplay] = useState('flex');
    const [addDateVisible, setAddDateVisible] = useState(false);
    const [addUserVisible, setAddUsersVisible] = useState(false);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [repetition, setRepetition] = useState(false);
    const [day, setDay] = useState();
    const [hour, setHour] = useState([]);
    const [users, setUsers] = useState(new Map);

    const cleanTask = () => {
        setUsers([])
        setHour([])
        setDay('')
        setRepetition(false)
        setDetails('')
        setName('')
    }

    const handleCreateTask = async () => {
        props.closeModal();

        const dayTask = new Date(day)
        if(hour[0]) dayTask.setHours(hour[0]-3)
        if(hour[1]) dayTask.setMinutes(hour[1])

        const taskToCreate = {
            name: name,
            details: details,
            date: dayTask,
            repetition: repetition,
            contributors: users || '',
            done: false,
            userId: props.user.id
        }
        const response = await createTask(taskToCreate)
        
        cleanTask()

        props.setNewTask(!props.task)
    }


    return (
    <>
        <ModalAddData 
            visible={addDateVisible}
            setVisible={setAddDateVisible}
            setDay={setDay}
            day={day}
            hour={hour}
            setHour={setHour}
        />

        <ModalAddUsers
            visible={addUserVisible}
            setVisible={setAddUsersVisible}
            users={users}
            setUsers={setUsers}
        />

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
                            onChangeText={(value)=> setName(value)} 
                        />
                    </View>
                    <View style={styles.inputDetailsContainer}>
                        <TextInput
                            placeholder='Adicionar Detalhes'
                            style={styles.inputDetails}
                            placeholderTextColor='rgba(255, 255, 255, 0.56)'
                            onChangeText={(value)=> setDetails(value)}
                        />
                    </View>
                    <View style={styles.buttonsTarefaContainer}>
                        <View style={styles.buttonsIconsContainer}>
                            <OptionsButton
                                image={images.agendaTarefasIcon.uri}
                                onPress={()=>setAddDateVisible(true)}
                            />
                            <OptionsButton
                                image={images.addMemberIcon.uri}
                                onPress={()=>setAddUsersVisible(true)}
                            />
                        </View>
                        <TextButton 
                            title='Cancelar'
                            onPress={() => {
                                cleanTask()
                                props.closeModal()
                            }} 
                        />
                        <TextButton 
                            title='Salvar'
                            onPress={handleCreateTask} 
                        />
                    </View>
                </View>
            </View>
        </Modal>
    </>
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

const mapStateToProps = (state) =>( {
    user: state.user,
})

export default connect(mapStateToProps)(ModalAddTarefa);