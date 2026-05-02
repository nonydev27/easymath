import { StyleSheet, Text, View } from "react-native";

export default function Lessons() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the lessons screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },

  text: {
    color: "white",
    fontSize: 20,
  },
});
