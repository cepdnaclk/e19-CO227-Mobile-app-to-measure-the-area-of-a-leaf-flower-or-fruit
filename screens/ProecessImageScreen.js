import React, { useState } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import Screen from "./Screen";
import colors from "../config/colors";
import VectorTextBtn from "../components/VectorTextBtn";

function ProecessImageScreen({ route, navigation }) {
  const { firebaseImage } = route.params;

  console.log(firebaseImage);
  const base64 = "";

  const goNext = () => {
    navigation.navigate("FocuScreen", { base64: base64 });
  };

  return (
    <Screen color={colors.color4}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: firebaseImage }}
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
          onPress={() => navigation.navigate("CameraScreen")}
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
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
          onPress={() => goNext()}
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

  indicatorView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    backgroundColor: colors.color3,
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
