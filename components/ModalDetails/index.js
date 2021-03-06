import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';


const ModalDetails = props => {
    
    const [visible, setVisible] = useState(false);

    const closeModal = () => {
        setVisible(props.visible);
        setTimeOut(3000);
        let visible = !props.visible;
        setVisible(visible);
    }

    return(
        <View style={styles.modalContainer}>
            <Modal 
                visible={visible} 
                animationType='none'
                transparent={true}
            > 
                <Text style={styles.title}> {props.text} asjkdhsdkas </Text>
            </Modal> 
        </View>
    );
}

const styles = StyleSheet.create({
    
    title:{
        color: '#2de327',
        fontFamily: 'roboto-bold',
        fontSize: 20
    },
    modalContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ModalDetails;