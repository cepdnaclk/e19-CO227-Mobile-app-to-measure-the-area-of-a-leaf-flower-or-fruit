import React from "react";

import { View, StyleSheet, Image } from "react-native";
import { CommonActions } from "@react-navigation/native";

import Screen from "./Screen";
import colors from "../config/colors";
import VectorTextBtn from "../components/VectorTextBtn";

function ProecessImageScreen({ route, navigation }) {
  // const { savedImage } = route.params;

  const pressRetakeImage = () => {
    navigation.navigate("CameraScreen");
  };

  const pressNext = () => {
    navigation.navigate("FocuScreen");
  };

  return (
    <Screen color={colors.color4}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            // source={{ uri: savedImage }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.downPart}>
        <VectorTextBtn
          name="camera-retake"
          size={40}
          title="camera-retake"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
          onPress={pressRetakeImage}
        />
        <VectorTextBtn
          name="rotate-right"
          size={40}
          title="Rotate right"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
        />
        <VectorTextBtn
          name="rotate-left"
          size={40}
          title="Rotate left"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
        />
        <VectorTextBtn
          name="page-next"
          size={40}
          title="Next"
          onPress={pressNext}
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color4,
  },
  imgContainer: {
    flex: 1,
    backgroundColor: colors.color3,
  },

  btn: {
    padding: 10,
    borderRadius: 15,
  },

  downPart: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.15,
    paddingHorizontal: 10,
  },
});

export default ProecessImageScreen;
