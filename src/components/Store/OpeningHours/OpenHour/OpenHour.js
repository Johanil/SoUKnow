import React, { Component } from "react";
import { View, Text } from "react-native";
import { style } from "./style";

class OpenHour extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Open hour</Text>
      </View>
    );
  }
}

export default OpenHour;
