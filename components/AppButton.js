import React from "react";
import {
  Button,
  StyleSheet,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";


function AppButton({ onPress, title, style }) {
  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <AppText>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.colorTwo,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppButton;
