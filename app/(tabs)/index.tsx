import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("../../assets/images/splashscreen.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>This is the index screen.</Text>
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

  link: {
    color: "yellow",
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
