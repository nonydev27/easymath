import { Button, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// const PlaceholderImage = require("../../assets/images/splashscreen.png");
// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Image source={PlaceholderImage} style={styles.image} />
//       <Text style={styles.text}>This is the index screen.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "orange",
//   },

//   text: {
//     color: "white",
//     fontSize: 20,
//   },

//   link: {
//     color: "yellow",
//     fontSize: 18,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
// });

export default function Index() {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: "black",
    margin: 30,
  },
});
