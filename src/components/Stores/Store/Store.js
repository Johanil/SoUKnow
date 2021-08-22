import React, { Component } from "react";
import { View, Text } from "react-native";
import Adress from "./Adress/Adress";
import OpeningHours from "./OpeningHours/OpeningHours";
import Position from "./Position/Position";
import { style } from "./style";

class Store extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Store</Text>
        <Text style={style.text}>Alias</Text>
        <Position></Position>
        <Adress></Adress>
        <OpeningHours></OpeningHours>
      </View>
    );
  }
}

export default Store;
