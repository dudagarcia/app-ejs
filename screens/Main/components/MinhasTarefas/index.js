import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { screenSize } from '../../../../constants';
import colors from '../../../../constants/colors';
import images from '../../../../constants/images';
import { getMyTasks } from '../../../../services/task';
import { NoTarefas, Tarefas, NewTarefaButton, ModalAddTarefa } from './Components';

const MinhasTarefas = (props) => {

    const [tasks, setTasks] = useState();
    const [modalAddTarefaVisible, setModalAddTarefaVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false)

    const closeModal = () =>{
        setModalAddTarefaVisible(false);
    }

    const getTarefas = async () => {
        setLoading(true);
        const response = await getMyTasks({userId : props.user.id});
        setTasks(response.data);
        setLoading(false);
    }

    useEffect(()=>{
        getTarefas()
    },[reload])

    return (
        <>
            <ModalAddTarefa 
                modalAddTarefaVisible={modalAddTarefaVisible}
                closeModal={closeModal}
                newTask={reload}
                setNewTask={setReload}
            />

            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Tarefas</Text>
                </View>
                <View style={styles.tarefasContainer}>
                    {
                        loading ?
                            <ActivityIndicator color={colors.mainDark}/>
                        :
                        (
                            tasks ?
                            <Tarefas tasks={tasks} reload={reload} setReload={setReload}/>
                        :
                            <NoTarefas/>
                        )
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