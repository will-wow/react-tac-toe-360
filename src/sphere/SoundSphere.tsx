import * as React from "react";
import * as R from "ramda";
import Entity from "Entity";
import { bindActionCreators } from "redux";
import { asset, StyleSheet, View, VrButton } from "react-360";

import * as Location from "./location";
import { connectWithStore } from "../store";
import { AudioOptions, playSound, stopSound } from "./audio-module";
import { PositionTrasnsforms } from "./transforms";
import { onSphereFound } from "./actions";

interface SoundSphereProps {
  gameStarted: boolean;
  location: Location.t;
  onSphereFound: () => void;
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
    const { gameStarted, location, onSphereFound } = this.props;

    if (!gameStarted) return null;

    const transform: PositionTrasnsforms = Location.toPositionTransforms(
      location
    );

    return (
      <View style={styles.resetPosition}>
        <VrButton onClick={onSphereFound} style={{ transform }}>
          <Entity
            source={{
              obj: asset("sphere/tinker.obj"),
              mtl: asset("sphere/obj.mtl")
            }}
          />
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resetPosition: {
    transform: [{ translateY: -27 }]
  }
});

export { SoundSphere };

const mapStateToProps = state => ({
  gameStarted: state.sphere.gameStarted,
  location: state.sphere.location
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onSphereFound
    },
    dispatch
  );

export default connectWithStore(mapStateToProps, mapDispatchToProps)(
  SoundSphere
);
