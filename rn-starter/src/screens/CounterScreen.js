import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_count':
      return { ...state, counter: state.counter + 1 };
    case 'decrease_count':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Text>Counter</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase_count', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease_count', payload: 1 });
        }}
      />
      <Text>Count = {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
