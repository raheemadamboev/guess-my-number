import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import Card from "../components/Card";

const StartGameScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The game screen!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Button title="Reset" onPress={() => {}} />
          </Pressable>
          <Pressable style={styles.button}>
            <Button title="Confirm" onPress={() => {}} />
          </Pressable>
        </View>
      </Card>
    </View>
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
