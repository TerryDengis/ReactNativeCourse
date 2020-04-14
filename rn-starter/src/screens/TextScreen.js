import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Text Screen</Text>
      <Text>Enter a Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text>Your password is {password}</Text>
      {password.length < 5 ? <Text>Password must be at least 5 characters long</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
