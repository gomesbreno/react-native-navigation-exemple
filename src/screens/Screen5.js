import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

class Screen5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.buttomText}>Cena 5</Text>
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

export default Screen5;
