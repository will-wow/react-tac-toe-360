import * as React from "react";
import { View, Text, StyleSheet } from "react-360";
import { connectWithStore } from "./store";
import MainMenu from "./main-menu/MainMenu";
import SoundSphere from "./sphere/SoundSphere";

interface SoundScapeProps {
  gameStarted: boolean;
}

const SoundScape: React.StatelessComponent<SoundScapeProps> = ({
  gameStarted
}) => (
  <View>
    <MainMenu />
  </View>
);

export default SoundScape;
