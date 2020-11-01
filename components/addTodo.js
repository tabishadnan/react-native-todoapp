import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({addTodo}) {

    const [value, setValue] = useState("");

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='add todo...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button color='#2196F3' onPress={() => {
          addTodo(value);
          setValue('');
      }} title='add todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
