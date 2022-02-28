import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import Card from "../components/Card";
import SummeryContainer from "../components/SummaryContainer";
import Colors from "../constants/Colors";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.max(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props: Props) => {
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState<number>(0);

  const currentLow = useRef<number>(1);
  const currentHigh = useRef<number>(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: Direction) => {
    if (
      (direction === Direction.LOWER && currentGuess < props.userChoice) ||
      (direction === Direction.HIGHER && currentGuess > props.userChoice)
    ) {
      Alert.alert(
        "Don't cheat man!",
        "You know that this is wrong...",
        [
          {
            text: "Sorry",
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      return;
    }

    if (direction === Direction.LOWER) {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    setCurrentGuess(
      generateRandomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
      )
    );

    setRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <SummeryContainer text={currentGuess.toString()} />
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          color={Colors.accent}
          onPress={nextGuessHandler.bind(this, Direction.LOWER)}
        />
        <Button
          title="HIGHER"
          color={Colors.accent}
          onPress={nextGuessHandler.bind(this, Direction.HIGHER)}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 2,
    width: "80%",
  },
});

export type Props = {
  userChoice: number;
  onGameOver: (rounds: number) => void;
};

export default GameScreen;

enum Direction {
  HIGHER,
  LOWER,
}
