import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

const Input = (props: Props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

interface Props extends TextInputProps {
  style?: {};
}

export default Input;
