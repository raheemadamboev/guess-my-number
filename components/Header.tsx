import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = (props: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
});

export type Props = {
  headerText: string;
};

export default Header;
