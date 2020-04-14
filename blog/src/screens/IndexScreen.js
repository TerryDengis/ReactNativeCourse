import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.listStyle}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.rowStyle}>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" style={{ fontSize: 30 }} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
  },
  listStyle: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});

export default IndexScreen;
