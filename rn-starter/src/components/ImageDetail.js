import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ image, title, likes }) => {
  return (
    <View>
      <Image source={image} />
      <Text> {title} </Text>
      <Text> Likes - {likes} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginVertical: 30,
    fontSize: 20,
  },
});

export default ImageDetail;
