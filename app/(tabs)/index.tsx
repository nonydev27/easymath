import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the index screen.</Text>
      <Link href={"/about"} style={styles.link}>
        Goto about page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },

  text: {
    color: "white",
    fontSize: 20,
  },

  link: {
    color: "yellow",
    fontSize: 18,
  },
});
