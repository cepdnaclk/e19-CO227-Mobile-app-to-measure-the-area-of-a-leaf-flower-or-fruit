import React, { useState } from "react";
import LottieView from "lottie-react-native";

import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ImageBackground,
  TextInput,
  Image,
} from "react-native";

import Screen from "./Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

function SignUpScreen(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // passwords and usernames set to this variables- 
  // sudusini, implement sign in part using your functions

  const printItems = (item1, item2) => {
    console.log(item1);
    console.log(item2);
  };
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

        <View style={styles.container2}>
          <AppText style={styles.title}>Sign Up</AppText>
          <AppTextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(value) => {
              setUserName(value);
            }}
          />

          <AppTextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(value) => {
              setPassword(value);
            }}
          />
          <AppTextInput style={styles.input} placeholder="Re-enter Password" />

          <AppButton
            title="Sign up"
            style={styles.signBtn}
            onPress={() => printItems(username, password)}
            onChangeText={(value) => {
              setPassword2(value);
            }}
          ></AppButton>
          <View style={styles.goToLoginContainer}>
            <AppText style={styles.goToLoginText}>Have an account? </AppText>
            <AppText style={styles.goToLogin}>Log in</AppText>
          </View>
        </View>

        <Image
          source={require("../assets/ellipse4.png")}
          style={styles.img}
        ></Image>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.color, flex: 1 },
  container2: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 40,
  },

  title: {
    fontSize: 30,
    marginBottom: 30,
    alignSelf: "flex-start",
    // marginLeft: 20,
  },

  subtitle: {
    alignSelf: "flex-start",
    marginLeft: 15,
    paddingVertical: 5,
    color: colors.gray1,
  },

  goToLoginContainer: {
    flexDirection: "row",
    marginTop: 10,
  },

  goToLoginText: {
    color: colors.gray1,
  },

  goToLogin: {
    textDecorationLine: "underline",
    color: colors.colorGreen,
  },

  img: {
    flex: 1,
    zIndex: -1,
    position: "absolute",

    marginTop: 600,
  },
  text: {
    fontSize: 32,
  },
  signBtn: {
    paddingVertical: 11,
    width: "100%",
  },

  input: {
    marginBottom: 70,
  },
});

export default SignUpScreen;
