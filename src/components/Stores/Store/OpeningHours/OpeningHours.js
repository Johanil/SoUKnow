import React, { Component } from "react";
import { View, Text } from "react-native";
import OpenHour from "./OpenHour/OpenHour";
import { style } from "./style";

class OpeningHours extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>OpenHours</Text>
        <OpenHour></OpenHour>
      </View>
    );
  }
}

export default OpeningHours;
