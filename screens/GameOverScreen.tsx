import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "../constants/Colors";

const GameOverScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>User's number was: {props.userNumber}</Text>
      <Button
        title="RESTART"
        color={Colors.accent}
        onPress={props.onRestartGame}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export type Props = {
  rounds: number;
  userNumber: number;
  onRestartGame: () => void;
};

export default GameOverScreen;
