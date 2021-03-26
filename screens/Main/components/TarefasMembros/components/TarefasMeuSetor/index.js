import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardPerfil } from '..';

const TarefasMeuSetor = ({ users }) => {

  return(
        <ScrollView>
            {
                users?.map((perfil) => {
                    return <CardPerfil perfil={perfil}/>
                })
            }
        </ScrollView>  
    );
}

const mapStateToProps = (state) => ({
    users: state.users.mySection
})

export default connect(mapStateToProps)(TarefasMeuSetor);