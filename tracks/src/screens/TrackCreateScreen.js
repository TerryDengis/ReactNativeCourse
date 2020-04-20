//this generates fake data
import '../_mockLocation';

import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callBack = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [permissionStatus] = useLocation(isFocused || recording, callBack);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {permissionStatus === 'denied' ? <Text>Location services must be enabled!</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
