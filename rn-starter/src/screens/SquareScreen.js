import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_CHANGE = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <Text>Color Square</Text>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_CHANGE })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_CHANGE })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_CHANGE })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_CHANGE })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_CHANGE })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_CHANGE })}
        color="Blue"
      />
      <View
        style={{
          height: 100,
          width: 400,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
      <Text>{`rgb(${red},${green},${blue})`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
