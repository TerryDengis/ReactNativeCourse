import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id');

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}
      >
        <FontAwesome name="pencil" style={{ fontSize: 30 }} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({});
export default ShowScreen;
