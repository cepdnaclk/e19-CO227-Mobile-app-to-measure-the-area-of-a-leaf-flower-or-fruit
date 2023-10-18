import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
} from "react-native";

import AppText from "../components/AppText";

function SplashScreen({ navigation }) {
  const [leftValue] = useState(new Animated.Value(300)); // Start at 200 (right corner)
  const [topValue] = useState(new Animated.Value(0));
  const rotationValue = useState(new Animated.Value(-90))[0];
  const [displayedLetterA, setDisplayedLetterA] = useState(null);
  const [displayedLetterG, setDisplayedLetterG] = useState(null);
  const [displayedLetterR, setDisplayedLetterR] = useState(null);
  const [displayedLetterO, setDisplayedLetterO] = useState(null);
  const [displayedLetterC, setDisplayedLetterC] = useState(null);
  const [displayedLetterM, setDisplayedLetterM] = useState(null);

  const [displayedLetterA2, setDisplayedLetterA2] = useState(null);

  const interpolatedRotation = rotationValue.interpolate({
    inputRange: [0, 90],
    outputRange: ["0deg", "90deg"],
  });

  function moveObject() {
    // Animated.spring(topValue, {
    //   toValue: 300,
    //   delay: 100,
    //   // friction: 3,
    //   // tension: 100,
    //   // bounciness: 2,
    //   // speed: 100,
    //   stiffness: 2000,
    //   damping: 30,
    //   mass: 2,
    //   useNativeDriver: true,
    // }).start();

    const fullAnime = Animated.sequence([
      Animated.parallel([
        Animated.timing(leftValue, {
          toValue: 15, // Move to the left (position 0)
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(rotationValue, {
          toValue: 0, // Rotate by 90 degrees
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ]);

    // Start the parallel animation
    fullAnime.start();
  }

  // Add a listener to leftValue
  useEffect(() => {
    const listener = leftValue.addListener(({ value }) => {
      const newDisplayedLetter = getDisplayedLetter(value);
      if (newDisplayedLetter == "A") {
        setDisplayedLetterA(newDisplayedLetter);
      }
      if (newDisplayedLetter == "g") {
        setDisplayedLetterG(newDisplayedLetter);
      }
      if (newDisplayedLetter == "r") {
        setDisplayedLetterR(newDisplayedLetter);
      }
      if (newDisplayedLetter == "o") {
        setDisplayedLetterO(newDisplayedLetter);
      }
      if (newDisplayedLetter == "C") {
        setDisplayedLetterC(newDisplayedLetter);
      }
      if (newDisplayedLetter == "a") {
        setDisplayedLetterA2(newDisplayedLetter);
      }
      if (newDisplayedLetter == "m") {
        setDisplayedLetterM(newDisplayedLetter);
      }
    });

    // Cleanup the listener when the component unmounts
  }, [leftValue]);

  // Implement your function to get the displayed letter based on the value
  function getDisplayedLetter(value) {
    if (value >= 30 && value < 60) {
      return "A";
    }
    if (value >= 60 && value < 90) {
      return "g";
    }
    if (value >= 90 && value < 120) {
      return "r";
    }
    if (value >= 120 && value < 150) {
      return "o";
    }
    if (value >= 150 && value < 180) {
      return "C";
    }
    if (value >= 180 && value < 210) {
      return "a";
    }
    if (value >= 210 && value < 240) {
      return "m";
    }

    return "";
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.letterCont}>
          {displayedLetterA && (
            <AppText style={styles.textA}>{displayedLetterA}</AppText>
          )}
          {displayedLetterG && (
            <AppText style={styles.textG}>{displayedLetterG}</AppText>
          )}
          {displayedLetterR && (
            <AppText style={styles.textR}>{displayedLetterR}</AppText>
          )}
          {displayedLetterO && (
            <AppText style={styles.textO}>{displayedLetterO}</AppText>
          )}
          {displayedLetterC && (
            <AppText style={styles.textC}>{displayedLetterC}</AppText>
          )}
          {displayedLetterA2 && (
            <AppText style={styles.textA2}>{displayedLetterA2}</AppText>
          )}
          {displayedLetterM && (
            <AppText style={styles.textM}>{displayedLetterM}</AppText>
          )}
        </View>

        <Animated.Image
          source={require("../assets/logo-black.png")}
          style={{
            height: 90,
            width: 90,
            position: "absolute",
            zIndex: 2,
            left: 35, // Start at the right corner
            transform: [
              { translateY: topValue },
              { translateX: leftValue },
              { rotate: interpolatedRotation },
            ],
          }}
        ></Animated.Image>
      </View>
      <TouchableOpacity onPress={moveObject} style={styles.click}>
        <Text> </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },

  letterCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginTop: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
  },
  textA: {
    marginTop: 300,
    paddingRight: 60,
    position: "absolute",
    fontSize: 33,
  },
  textG: {
    marginTop: 300,
    paddingRight: 0,
    position: "absolute",
    fontSize: 33,
  },
  textR: {
    marginTop: 300,
    paddingLeft: 50,
    position: "absolute",
    fontSize: 33,
  },
  textO: {
    marginTop: 300,
    paddingLeft: 97,
    position: "absolute",
    fontSize: 35,
  },
  textC: {
    marginTop: 300,
    paddingLeft: 160,
    position: "absolute",
    fontSize: 33,
  },
  textA2: {
    marginTop: 300,
    paddingLeft: 222,
    position: "absolute",
    fontSize: 33,
  },
  textM: {
    marginTop: 300,
    paddingLeft: 290,
    position: "absolute",
    fontSize: 33,
  },

  click: {
    marginTop: 300,
  },
});

export default SplashScreen;
