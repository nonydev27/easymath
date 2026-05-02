import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Page Not Found!" }} />
      <View style={styles.container}>
        ={" "}
        <Link href="/" style={styles.link}>
          Goto home page
        </Link>
      </View>
    </>
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
