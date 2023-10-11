import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
} from "react-native";

function SplashScreen(props) {
  const leftValue = useState(new Animated.Value(240))[0]; // Start at 200 (right corner)
  const topValue = useState(new Animated.Value(0))[0];
  const rotationValue = useState(new Animated.Value(0))[0];
  const [displayedLetters, setDisplayedLetters] = useState([]);

  const interpolatedRotation = rotationValue.interpolate({
    inputRange: [0, 90],
    outputRange: ["0deg", "90deg"],
  });

  // Add a listener to leftValue
  useEffect(() => {
    leftValue.addListener(({ value }) => {
      const newDisplayedLetter = getDisplayedLetter(value);
      if (
        newDisplayedLetter &&
        !displayedLetters.find((letter) => letter.letter === newDisplayedLetter)
      ) {
        setDisplayedLetters([
          ...displayedLetters,
          { letter: newDisplayedLetter, position: value },
        ]);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => leftValue.removeAllListeners();
  }, [leftValue, displayedLetters]);

  function getDisplayedLetter(value) {
    if (value <= 40) {
      
      return "K";
    } else if (value <= 140) {
      console.log("dione");
      return "L";
    } else if (value <= 70) {
      return "N";
    }
    return "";
  }

  function moveObject() {
    // Define the first animation
    const firstAnimation = Animated.timing(leftValue, {
      toValue: 0, // Move to the left (position 0)
      duration: 1000,
      useNativeDriver: true,
    });

    // Start the first animation
    firstAnimation.start();
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {displayedLetters.map((item, index) => (
          <Text
            key={index}
            style={[styles.revealText, { right: item.position }]}
          >
            {item.letter}
          </Text>
        ))}
        <Animated.Image
          source={require("../assets/logo-black.png")}
          style={{
            height: 100,
            width: 100,
            position: "absolute",
            zIndex: 2,
            left: 20, // Start at the right corner
            transform: [
              { translateY: topValue },
              { translateX: leftValue },
              { rotate: interpolatedRotation },
            ],
          }}
        ></Animated.Image>
      </View>
      <TouchableOpacity onPress={moveObject} style={styles.click}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  logoContainer: {
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  revealText: {
    fontSize: 30,
    position: "absolute",
  },
  click: {
    marginTop: 200,
  },
});

export default SplashScreen;

// import React, { useState, useEffect } from "react";

// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
//   Text,
// } from "react-native";

// function SplashScreen(props) {
//   const leftValue = useState(new Animated.Value(0))[0];
//   const topValue = useState(new Animated.Value(0))[0];
//   const rotationValue = useState(new Animated.Value(0))[0];

//   const interpolatedRotation = rotationValue.interpolate({
//     inputRange: [0, 90],
//     outputRange: ["0deg", "90deg"],
//   });

//   function moveObject() {
//     // Define the first animation
//     const firstAnimation = Animated.timing(leftValue, {
//       toValue: 200,
//       duration: 1000,
//       useNativeDriver: true,
//     });

//     // Start the first animation
//     firstAnimation.start();
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         {leftValue > 100 && <Text style={styles.revealText}>R</Text>}
//         <Animated.Image
//           source={require("../assets/logo-black.png")}
//           style={{
//             height: 100,
//             width: 100,
//             position: "absolute",
//             zIndex: 2,
//             marginLeft: 20,
//             transform: [
//               { translateY: topValue },
//               { translateX: leftValue },
//               { rotate: interpolatedRotation },
//             ],
//           }}
//         ></Animated.Image>
//       </View>
//       <TouchableOpacity onPress={moveObject} style={styles.click}>
//         <Text>Click me</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {},

//   logoContainer: {
//     marginTop: 100,
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   revealText: {
//     fontSize: 30,
//     position: "absolute",
//     marginLeft: 20,
//   },

//   click: {
//     marginTop: 200,
//   },
// });

// export default SplashScreen;

// animations 1

// function SplashScreen(props) {
//   const [value] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

// // more points we have animation more smoother.

//   const moveObject = () => {
//     Animated.timing(value, {
//       toValue: { x: 100, y: 100 },
//       duration: 1000,
//       useNativeDriver: false,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={value.getLayout()}>
//         <View style={styles.animeBall}></View>
//       </Animated.View>
//       <TouchableOpacity onPress={moveObject}>
//         <Text>Click me</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignContent: "center",
//     justifyContent: "center",
//   },

//   animeBall: {
//     height: 100,
//     width: 100,
//     backgroundColor: "black",
//   },
// });

// export default SplashScreen;
