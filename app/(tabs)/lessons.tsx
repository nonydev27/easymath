import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Lessons() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/maintenance.json")}
        style={styles.animation}
        autoPlay
        loop
      />
      <Text style={styles.text}>Page is currently under maintenance.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "",
  },
  animation: {
    width: 300,
    height: 300,
  },
  text: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
