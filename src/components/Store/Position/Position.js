import React, { Component } from "react";
import { View, Text } from "react-native";
import { style } from "./style";

class Position extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Longitude</Text>
        <Text>Latitude</Text>
      </View>
    );
  }
}

export default Position;
