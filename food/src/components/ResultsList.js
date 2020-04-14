import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import ResultsDetails from './ResultsDetails';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  containerStyle: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
