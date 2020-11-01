import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

export default function TodoItem({ item, index, removeTodo, editTodo, onEdiCthange, saveTodo }) {

    return (
        <>
            {!item.isShowInput && <Text key={index} style={styles.item}>{item.value}</Text>}
            {!!item.isShowInput && <TextInput 
                style={styles.input} 
                value={item.value}
                onChange={(e) => onEdiCthange(e, index)}
            />}
            <View style={styles.fixToText}>
                <Button
                    title="Edit"
                    onPress={() => editTodo(index)}
                />
                <Button
                    title="Save"
                    onPress={() => saveTodo(index)}
                />
                <Button
                    title="Delete"
                    onPress={() => removeTodo(index)}
                />
            </View>
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
        color: '#2196F3', 
        fontWeight : 'bold'
    },
    input: {
        padding: 16,
        marginTop: 16,
        borderColor: '#2196F3',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        color: '#2196F3', 
        fontWeight : 'bold'
    },
    fixToText: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});