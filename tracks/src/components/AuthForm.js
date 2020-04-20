import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer />
      <Text h3>{headerText}</Text>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Spacer />
      <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 24,
    marginVertical: 15,
  },
});

export default AuthForm;
