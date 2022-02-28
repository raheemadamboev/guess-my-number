import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import SummeryContainer from "../components/SummaryContainer";
import Colors from "../constants/Colors";

const StartGameScreen = (props: Props) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const onEnteredNumberChange = (value: string) => {
    setEnteredNumber(value.replace(/[^0-9]/g, ""));
  };

  const onResetEnteredNumber = () => {
    setEnteredNumber("");
    setSelectedNumber(0);
    setConfirmed(false);
    onDissmissKeyboard();
  };

  const onConfirmEnteredNumber = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: onResetEnteredNumber,
          },
        ],
        { cancelable: false }
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredNumber("");
    onDissmissKeyboard();
  };

  const onDissmissKeyboard = () => {
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <SummeryContainer text={selectedNumber.toString()} />
        <Button
          title="START GAME"
          color={Colors.primary}
          onPress={props.onStartGame.bind(this, selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onDissmissKeyboard}>
      <View style={styles.screen}>
        <Text style={styles.title}>The game screen!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredNumber}
            onChangeText={onEnteredNumberChange}
          />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={onResetEnteredNumber}
              />
            </Pressable>
            <Pressable style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={onConfirmEnteredNumber}
              />
            </Pressable>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "40%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
  },
  summaryContainer: {
    width: "80%",
    marginTop: 20,
    alignItems: "center",
  },
});

export type Props = {
  onStartGame: (selectedNumber: number) => void;
};

export default StartGameScreen;
