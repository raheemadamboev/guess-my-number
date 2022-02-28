import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  const configureNewGameHandler = () => {
    setUserNumber(0);
    setGuessRounds(0);
  };

  const gameOverHandler = (rounds: number) => {
    setGuessRounds(rounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber !== 0 && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        rounds={guessRounds}
        userNumber={userNumber}
        onRestartGame={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header headerText="Guess my Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
