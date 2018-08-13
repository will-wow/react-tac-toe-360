import * as React from "react";
import { asset, StyleSheet, View } from "react-360";
import Entity from "Entity";
import * as R from "ramda";

import { connectWithStore } from "../store";
import * as Location from "./location";
import { AudioOptions, playSound, stopSound } from "./audio-module";
import { PositionTrasnsforms } from "./transforms";
import { onStartPlaying, onStopPlaying } from "./actions";

interface SoundSphereProps {
  gameStarted: boolean;
  location: Location.t;
}

const audioHandle = "sphere";
const defaultAudioOptions: AudioOptions = {
  source: asset("hey.mp3"),
  is3d: true,
  loop: false
};

class SoundSphere extends React.Component<SoundSphereProps> {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { location: prevLocation } = prevProps;

    if (!R.equals(location, prevLocation)) {
      const position = Location.toAudioPosition(location);
      playSound(audioHandle, defaultAudioOptions, position);
    }
  }

  componentWillUnmount() {
    stopSound(audioHandle);
  }

  render() {
    const { gameStarted, location } = this.props;

    if (!gameStarted) return null;

    const transform: PositionTrasnsforms = Location.toPositionTransforms(
      location
    );

    return (
      <View style={styles.resetPosition}>
        <Entity
          style={[styles.sphere, { transform }]}
          source={{
            obj: asset("sphere/tinker.obj"),
            mtl: asset("sphere/obj.mtl")
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resetPosition: {
    transform: [{ translateY: -27 }]
  },
  sphere: {}
});

export { SoundSphere };

const mapStateToProps = state => ({
  gameStarted: state.sphere.gameStarted,
  location: state.sphere.location
});

export default connectWithStore(mapStateToProps)(SoundSphere);
