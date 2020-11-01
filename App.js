import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { value: text, isShowInput: false, isComplete: false }]);
  };

  const removeTodo = (index) => {

    let todosArrCopy = [...todos];

    todosArrCopy.splice(index, 1);

    setTodos(todosArrCopy);
  };

  const editTodo = (index) => {

    let todosArrCopy = [...todos];

    todosArrCopy[index].isShowInput = true;

    setTodos(todosArrCopy);
  }

  const onEdiCthange = (evt, index) => {

    let todosArrCopy = [...todos];

    todosArrCopy[index].value = evt.target.value;
    setTodos(todosArrCopy);
  }

  const saveTodo = (index) => {

    let todosArrCopy = [...todos];

    todosArrCopy[index].isShowInput = false;
    setTodos(todosArrCopy);
}


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addTodo={addTodo} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item, index }) => (
              <TodoItem index={index}
                item={item}
                removeTodo={removeTodo}
                editTodo={editTodo}
                onEdiCthange={onEdiCthange}
                saveTodo={saveTodo}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});