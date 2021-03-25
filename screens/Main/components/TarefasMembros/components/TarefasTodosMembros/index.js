import React from 'react';
import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardPerfil, ModalTarefasMembro } from '..';

const TarefasTodosMembros = ({ users }) => {

    const [selectedUser, setSelectedUser] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const toggleUserTarefa = (perfil) => {
        setSelectedUser(perfil)
        setModalVisible(!modalVisible)
    } 

  return(
        <ScrollView>
            <ModalTarefasMembro 
                visible={modalVisible}
                setVisible={setModalVisible}
                user={selectedUser}
            />
            {
                users.map((perfil) => {
                    return (
                    <>
                        <CardPerfil 
                            perfil={perfil} 
                            onPress={()=> toggleUserTarefa(perfil)}
                        />
                    </>    
                        )
                })
            }
        </ScrollView>  
    );
}

const mapStateToProps = (state) => ({
    users: state.users.allUsers
})

export default connect(mapStateToProps)(TarefasTodosMembros);