import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 20 },
    { name: 'Friend 2', age: 25 },
    { name: 'Friend 3', age: 28 },
    { name: 'Friend 4', age: 30 },
    { name: 'Friend 5', age: 40 },
    { name: 'Friend 6', age: 45 },
    { name: 'Friend 7', age: 52 },
    { name: 'Friend 8', age: 26 },
    { name: 'Friend 9', age: 18 },
  ];
  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    fontSize: 20,
  },
});
export default ListScreen;
