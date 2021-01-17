import React from 'react';

import { View, Text , StyleSheet} from 'react-native';

const NoTarefas = () => {

    return(
        <View style={styles.mainContiner}>
            <Text style={styles.title}>Cri Cri</Text>
            <Text style={styles.subtitle}>Você ainda não tem tarefas, vamos começar?</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    mainContiner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgba(153, 153, 153, 0.5)'
    },

    subtitle: {
        color: '#A8A8A9',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 5
    }
});

export default NoTarefas;