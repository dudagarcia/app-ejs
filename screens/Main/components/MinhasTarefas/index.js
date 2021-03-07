import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { screenSize } from '../../../../constants';
import colors from '../../../../constants/colors';
import images from '../../../../constants/images';
import { getMyTasks } from '../../../../services/task';
import { NoTarefas, Tarefas, NewTarefaButton, OptionsButton, TextButton, ModalAddTarefa } from './Components';

const MinhasTarefas = (props) => {

    const [tasks, setTasks] = useState();
    const [modalAddTarefaVisible, setModalAddTarefaVisible] = useState(false);

    const closeModal = () =>{
        setModalAddTarefaVisible(false);
    }

    const getTarefas = async () => {
        const response = await getMyTasks({userId : props.user.id});
        setTasks(response.data);
    }

    useEffect(()=>{
        getTarefas()
    },[])

    return (
        <>
            <ModalAddTarefa 
                modalAddTarefaVisible={modalAddTarefaVisible}
                closeModal={closeModal}
            />

            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Minhas Tarefas</Text>
                </View>
                <View style={styles.tarefasContainer}>
                    {
                        tasks ?
                            <Tarefas tasks={tasks}/>
                        :
                            <NoTarefas/>
                    }
                </View>
                <View style={styles.buttonContainer}>
                    <NewTarefaButton 
                        buttonDisplay={props.buttonDisplay} 
                        onPress={() => { setModalAddTarefaVisible(true) }} />
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
        marginTop: screenSize.height*0.7,
        display: 'flex',
        alignSelf: 'center'
    },


});

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(MinhasTarefas);