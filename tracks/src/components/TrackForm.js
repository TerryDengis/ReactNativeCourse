import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

import useSaveTrack from '../hooks/useSaveTrack';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer />
      <Input placeholder="Enter Name" onChangeText={changeName} value={name} />
      <Spacer />

      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      <Spacer />
      {!recording && locations.length ? (
        <Button title="Save Recording" onPress={saveTrack} />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
