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
import { getStores, getStore } from "./src/api/systembolaget";

export default function App() {
  getStore("0102");
  getStores;
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
