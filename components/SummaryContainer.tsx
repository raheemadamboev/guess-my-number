import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

const SummeryContainer = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export type Props = {
  text: string;
};

export default SummeryContainer;
