import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, index }) {

    return (
        <>
            <Text key={index} style={styles.item}>{item.value}</Text>
            <MaterialIcons name="edit" size={24} color="black" /> 
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        color: 'red'
    }
});