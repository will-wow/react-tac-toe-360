import * as React from "react";
import { asset, Text, StyleSheet, View, NativeModules } from "react-360";
import Entity from "Entity";

import * as Location from "./location";
import { AudioOptions } from "./audio-module";
import { PositionTrasnsforms } from "./transforms";

const { AudioModule } = NativeModules;

interface SoundSphereState {
  location: Location.t;
}

const audioHandle = "sphere";
const timeToMove = 2000;
const defaultAudioOptions = {
  source: asset("hey.mp3"),
  is3d: true,
  loop: false
};

class SoundSphere extends React.Component<null, SoundSphereState> {
  interval: number;

  state = {
    location: {
      x: 0,
      y: 0,
      z: 0
    }
  };
  componentDidMount() {
    this.randomMove();
    this.interval = setInterval(this.randomMove, timeToMove);
  }

  componentWillUnmount() {
    AudioModule.destroy(audioHandle);
    clearInterval(this.interval);
  }

  move = (location: Location.t): void => {
    this.setState(
      {
        location
      },
      this.play
    );
  };

  randomMove = (): void => {
    const move = Location.random();
    this.move(move);
  };

  play = () => {
    const { location } = this.state;
    const position = Location.toAudioPosition(location);

    const audioOptions: AudioOptions = { ...defaultAudioOptions, position };

    AudioModule.createAudio(audioHandle, audioOptions);
    AudioModule.play(audioHandle);
  };

  render() {
    const { location } = this.state;
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

export default SoundSphere;
