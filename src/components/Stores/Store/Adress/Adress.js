import React, { Component } from "react";
import { View, Text } from "react-native";
import { style } from "./style";

class Adress extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>       Gatuadress</Text>
        <Text style={style.text}>       Postnummer</Text>
        <Text style={style.text}>       Ort</Text>
      </View>
    );
  }
}

export default Adress;
