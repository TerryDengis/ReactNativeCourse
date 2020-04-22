import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const windowHeight = Dimensions.get('window').height;

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={styles.ActivityIndicator} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={40}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline strokeWidth={5} coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: windowHeight * 0.5,
  },
  ActivityIndicator: {
    marginTop: 200,
  },
});
