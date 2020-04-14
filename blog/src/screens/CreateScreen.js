import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  //console.log('HI from Create Screen');

  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(newTitle, newContent) => {
        addBlogPost(newTitle, newContent, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
