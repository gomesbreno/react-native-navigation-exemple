import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Menu")}
          style={styles.buttom}
        >
          <Text style={styles.buttomText}>Ir para Navbar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4"
  },
  buttomText: {
    fontSize: 20,
    color: "#fff"
  }
});

export default Screen2;
