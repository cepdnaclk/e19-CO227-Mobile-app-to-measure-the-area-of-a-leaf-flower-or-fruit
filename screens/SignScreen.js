import React from "react";
import LottieView from "lottie-react-native";

import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ImageBackground,
} from "react-native";

import Screen from "./Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function SignScreen(props) {
  return (
    <Screen color={colors.color4}>
      <View style={styles.container}>
        <View style={{ width: 400, height: 200 }}>
          <LottieView
            autoPlay={true}
            source={require("../assets/anime.json")}
            style={{
              width: 200,
              margin: -5,
              height: 400,
              alignSelf: "center",
            }}
          ></LottieView>
        </View>

        <ImageBackground
          source={require("../assets/ellipse4.png")}
          style={styles.img}
        >
          <View style={styles.container2}>
            <AppText style={styles.text}>Measure It</AppText>
            <AppText style={styles.text}>Discern It</AppText>
            <AppText style={styles.text}>Share It</AppText>
            <AppButton
              title=" in"
              style={styles.signBtn}
              onPress={() => console.log("Log in")}
            ></AppButton>
          </View>
        </ImageBackground>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.color, flex: 1 },
  container2: {
    alignItems: "center",
    marginTop: 100,
  },

  img: {
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
  signBtn: {
    marginTop: 100,
  },
});

export default SignScreen;
