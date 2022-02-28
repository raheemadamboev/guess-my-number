import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GameOverScreen = (props: Props) => {
    return (<View style={styles.screen}>
        <Text>The game is over!</Text>
    </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export type Props = {};

export default GameOverScreen;
