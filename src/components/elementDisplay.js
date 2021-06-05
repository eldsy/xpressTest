import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ElementDisplay = (props) => {

    return (
        <View style={styles.item}>
                <Text style={styles.itemTitle}>{props.title}</Text>
                <Text style={styles.itemText}>{props.detail}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 2,
        
    },
    itemTitle: {
        maxWidth: '100%',
        marginLeft: 3,
        color: 'black',
        fontSize: 20
        
    },
    itemText: {
        maxWidth: '100%',
        color: 'gray'
    }
});

export default ElementDisplay;