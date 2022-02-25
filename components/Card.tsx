import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props: Props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
});

export type Props = {
  children: React.ReactNode;
  style?: {};
};

export default Card;
