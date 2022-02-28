import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";

const StartGameScreen = (props: Props) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const onEnteredNumberChange = (value: string) => {
    setEnteredNumber(value.replace(/[^0-9]/g, ""));
  };

  const onDissmissKeyboard = () => {
    Keyboard.dismiss();
  };

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
                onPress={onDissmissKeyboard}
              />
            </Pressable>
            <Pressable style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={onDissmissKeyboard}
              />
            </Pressable>
          </View>
        </Card>
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
    width: 300,
    maxWidth: "80%",
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
});

export type Props = {};

export default StartGameScreen;
