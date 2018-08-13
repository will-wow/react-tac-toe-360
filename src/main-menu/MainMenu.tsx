import * as React from "react";
import { View, StyleSheet, Text } from "react-360";
import { bindActionCreators } from "redux";

import { onStartPlaying, onStopPlaying } from "../sphere/actions";
import { connectWithStore } from "../store";

import Button from "./Button";

interface MainMenuProps {
  gameStarted: boolean;
  onStartPlaying: () => void;
  onStopPlaying: () => void;
  sphereMoves: number;
  spheresFound: number;
}

const MainMenu: React.StatelessComponent<MainMenuProps> = ({
  gameStarted,
  sphereMoves,
  spheresFound,
  onStartPlaying,
  onStopPlaying
}) => {
  console.log("sphers", sphereMoves, spheresFound);
  return (
    <View style={styles.panel}>
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>Soundscape</Text>
        {gameStarted ? (
          <Button onClick={onStopPlaying} text="Stop" />
        ) : (
          <Button onClick={onStartPlaying} text="Play!" />
        )}

        {gameStarted && (
          <Text>
            {spheresFound}/{sphereMoves} Found
          </Text>
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
  gameStarted: state.sphere.gameStarted,
  sphereMoves: state.sphere.sphereMoves,
  spheresFound: state.sphere.spheresFound
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
