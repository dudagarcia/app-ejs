import React from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import PencilIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FolderIcon from 'react-native-vector-icons/Entypo';

const ModalDetails = props => {
    return(
        <View style={styles.modalContainer}>
            <Modal 
                visible={props.visible} 
                animationType='none'
                transparent={true}
            > 
                <View style={styles.darkerContainer}>
                    <Text style={styles.title}> Doula </Text>
                    <View style={styles.lighterContainer}>
                        <View style={styles.textWrapper}>
                            <Text style={styles.subtitleText}> Participantes:</Text>
                                <Text style={styles.text}> fulano, ciclano, alguém </Text>
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.subtitleText}> Status:</Text>
                                <Text style={styles.text}> Ativo </Text>
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.subtitleText}> Descrição do projeto: </Text>
                            <Text style={styles.text}> descrição </Text>
                        </View> 
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <Text style={styles.subtitleText}> 
                                    <PencilIcon name="pencil" style={styles.icon} size={15}/>
                                    &nbsp;&nbsp;Editar 
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <Text style={styles.subtitleText}> 
                                    <FolderIcon name="box" size={15}/>
                                    &nbsp;&nbsp;Arquivar 
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal> 
        </View>
    );
}

const styles = StyleSheet.create({
    darkerContainer:{
        width: 340,
        backgroundColor: Colors.mainDark,
        borderRadius: 25,
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: 20,
        marginVertical: 220,
        marginHorizontal: 25
    },
    lighterContainer:{
        width: 260,
        backgroundColor: Colors.mediumBlue,
        borderRadius: 19,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 10
    },
    icon:{
        paddingRight: 3
    },
    title:{
        color: 'white',
        fontFamily: 'roboto-bold',
        fontSize: 20
    },
    modalContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    button:{
        width: 96,
        borderRadius: 20,
        backgroundColor: Colors.lighterBlue,
        marginVertical: 20,
        marginHorizontal: 30,
        alignItems: 'center'
    },
    text:{
        fontFamily: 'roboto-regular',
        color: 'white',
        fontSize: 14
    },
    subtitleText:{
        fontFamily: 'roboto-bold',
        color: 'white',
        fontSize: 14
    },
    textWrapper:{
        flexDirection:'row',
        paddingRight: 10,
        position: 'relative',
        marginVertical: 10
    }
});

export default ModalDetails;