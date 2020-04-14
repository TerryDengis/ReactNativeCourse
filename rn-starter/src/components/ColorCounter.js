import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title="increase" onPress={onIncrease} />
      <Button title="decrease" onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
