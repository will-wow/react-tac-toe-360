import * as React from "react";
import { View, StyleSheet } from "react-360";

import Title from "./Title";
import Button from "./Button";

const MainMenu = ({ onStart }) => (
  <View
    style={{
      flex: 1,
      width: 5,
      flexDirection: "column",
      alignItems: "stretch",
      layoutOrigin: [0.5, 0.5],
      transform: [{ translate: [0, 0, -5] }]
    }}
  >
    <Title />
    <Button onClick={onStart} text="Play!" />
  </View>
);

export default MainMenu;

const styles = StyleSheet.create({
  mainMenu: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

