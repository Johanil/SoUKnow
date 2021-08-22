import React, { Component } from "react";
import { View, Text } from "react-native";
import Adress from "./Adress/Adress";
import OpeningHours from "./OpeningHours/OpeningHours";
import Position from "./Position/Position";
import Store from "./Store/Store";
import { style } from "./style";

class Stores extends Component {
  render() {
    return (
      <View style={style.container}>
        <Store></Store>
        <Store></Store>
      </View>
    );
  }
}

export default Stores;
