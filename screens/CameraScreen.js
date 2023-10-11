import React from "react";

import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import ImageButton from "../components/ImageButton";
import VectorButton from "../components/VectorButton";
import Screen from "./Screen";

function CameraScreen(props) {
  return (
    <Screen color="black">
      <View style={styles.container}>
        <View style={styles.camera}></View>
        <View style={styles.menu}>
          <VectorButton
            name="history"
            color="white"
            size={40}
            style={{ padding: 15 }}
          ></VectorButton>
          <VectorButton
            name="image-outline"
            color="white"
            size={40}
            style={{ padding: 15 }}
          ></VectorButton>
          <ImageButton
            image={require("../assets/AgroCam.png")}
            size={70}
            style={{ padding: 15 }}
          ></ImageButton>
          <VectorButton
            name="account-settings-outline"
            color="white"
            size={40}
            style={{ padding: 15 }}
          ></VectorButton>
          <VectorButton
            name="camera-flip-outline"
            color="white"
            size={40}
            style={{ padding: 15 }}
          ></VectorButton>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.black, paddingTop: 50, flex: 1 },
  camera: { backgroundColor: colors.colorOne, flex: 1 },
  menu: {
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
  },
});

export default CameraScreen;
