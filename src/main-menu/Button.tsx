import * as React from "react";
import { View, Text, VrButton, StyleSheet } from "react-360";

const Button = ({ text, onClick }) => (
  <VrButton onClick={onClick} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </VrButton>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#639dda"
  },
  text: { fontSize: 30, textAlign: "center" }
});

export default Button;
