import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text clicked!");
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="CLick ME!"
        onPress={() =>
          Alert.alert("Titleee", "Message", [
            {
              text: "Yes",
              onPress: () => console.log("YES"),
            },
            { text: "No" },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
