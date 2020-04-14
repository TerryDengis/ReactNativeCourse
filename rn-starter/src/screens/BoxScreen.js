import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.view1Style} />
      <View style={styles.view2Style} />
      <View style={styles.view3Style} />
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1Style: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
  },
  view2Style: {
    height: 50,
    width: 100,
    backgroundColor: 'green',
    top: 50,
  },
  view3Style: {
    height: 50,
    width: 100,
    backgroundColor: 'blue',
  },
});
