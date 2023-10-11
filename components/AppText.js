import React from "react";

import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontWeight: "700",
    paddingVertical: 7,
    color: colors.black,
  },
});

export default AppText;
