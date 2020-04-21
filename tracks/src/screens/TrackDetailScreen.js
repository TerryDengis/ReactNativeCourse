import React, { useContext } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TraclContext } from '../context/TrackContext';

const windowHeight = Dimensions.get('window').height;

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TraclContext);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  map: {
    height: windowHeight * 0.75,
  },
});
