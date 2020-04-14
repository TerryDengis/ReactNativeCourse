import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import yelp from '../api/yelp';
import { log } from 'react-native-reanimated';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  console.log(result);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  const { location } = result;
  return (
    <View>
      <Text style={styles.titleStyle}>{result.name}</Text>
      {location.address1 ? <Text style={styles.addressStyle}>{location.address1}</Text> : null}
      {location.address2 ? <Text style={styles.addressStyle}>{location.address2}</Text> : null}
      {location.address3 ? <Text style={styles.addressStyle}>{location.address3}</Text> : null}
      {location.city ? (
        <Text style={styles.addressStyle}>
          {location.city}, {location.state} {location.zip_code}
        </Text>
      ) : null}
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    marginBottom: 10,
    borderRadius: 5,
    marginLeft: 15,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  containerStyle: {
    marginBottom: 10,
  },
  addressStyle: {
    marginLeft: 15,
  },
});
export default ResultsShowScreen;
