import React, { useState } from 'react';
import * as yup from 'yup';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required')
  });

  const handleSubmit = () => {
    // ... Your existing handleSubmit code ...
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.appname}>Chatta</Text>
        <Button title="Switch" onPress={() => navigation.navigate('Register')} />
        {/* Corrected the onPress prop */}
      </View>
      <View style={styles.bottomContainer}>
        {/* ... Your existing JSX ... */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... Your existing styles ...
});
