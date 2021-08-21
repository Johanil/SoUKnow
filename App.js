import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import { displayStores, fetchStores } from "./src/api/systembolaget";

export default function App() {
  console.log("Fetch:");
  displayStores;
  return (
    <SafeAreaView style={styles.container}>
      <Text>HEJ</Text>
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
