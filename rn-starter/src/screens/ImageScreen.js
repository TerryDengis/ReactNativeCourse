import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}> Image Demo </Text>
      <ImageDetail title="Forest" image={require('../../assets/forest.jpg')} likes={10} />
      <ImageDetail title="Beach" image={require('../../assets/beach.jpg')} likes={14} />
      <ImageDetail title="Mountain" image={require('../../assets/mountain.jpg')} likes={8} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
