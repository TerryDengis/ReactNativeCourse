import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SigninScreen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
      <Button title="Go to Main flow" onPress={() => navigation.navigate('mainFlow')} />
    </>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
