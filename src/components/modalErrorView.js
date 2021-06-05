
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ModalErrorView = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{props.message}</Text>
                <Button title="Fermer" onPress={props.closeModal} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        padding: 10,
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalText: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 15
    }

})

export default ModalErrorView;
