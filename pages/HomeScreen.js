import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function () {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [books, setBooks] = useState(['The Secret', 'The Art of War']);
  
  useEffect(()=>{
    console.log('just mounted');
    return () => {
      console.log('unmounting');
    }
  })

  const addBook = (title) => {
    setBooks((prevBooks) => {
      return [...prevBooks, title.trim()];
    });
  };

  const clearState = () => {
    setName('');
    setAge('');
    setBooks(['The Secret', 'The Art of War']);
  };

  const removeBook = (index) => {
    if (books[index]) {
      const newBooks = [...books];
      newBooks.splice(index, 1);
      setBooks(newBooks);
    }
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(age);
  }, [age]);

  useEffect(() => {
    console.log(books);
  }, [books]);
  useEffect( () => {

  }, [name, age, books])
  

  return (
    <View>
      {books.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => removeBook(index)} />
          </View>
        );
      })}
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
        onChangeText={(text) => setAge(text)}
        value={age}
        keyboardType="numeric"
      />
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
        onBlur={(ev) => addBook(ev.nativeEvent.text)}
      />
      <Button
        style={{
          backgroundColor: 'rgb(150, 180, 190)',
          borderRadius: 5,
          color: '#fff',
        }}
        onPress={clearState}
        title="Clear State"
      />
    </View>
  );
}
