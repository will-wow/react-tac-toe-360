import * as React from "react";
import { View, StyleSheet, Text } from "react-360";
import { onStartPlaying, onStopPlaying } from "../sphere/actions";
import { connectWithStore } from "../store";

import Button from "./Button";
import { bindActionCreators } from "redux";

interface MainMenuProps {
  gameStarted: boolean;
  onStartPlaying: () => void;
  onStopPlaying: () => void;
}

const MainMenu: React.StatelessComponent<MainMenuProps> = ({
  gameStarted,
  onStartPlaying,
  onStopPlaying
}) => {
  return (
    <View style={styles.panel}>
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>Soundscape</Text>
        {gameStarted ? (
          <Button onClick={onStopPlaying} text="Stop" />
        ) : (
          <Button onClick={onStartPlaying} text="Play!" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});

export { MainMenu };

const mapStateToProps = state => ({
  gameStarted: state.sphere.gameStarted
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onStartPlaying,
      onStopPlaying
    },
    dispatch
  );

export default connectWithStore(mapStateToProps, mapDispatchToProps)(MainMenu);
