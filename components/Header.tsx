import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#f7287b",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {},
});

export type Props = {
  headerText: string;
};

export default Header;
