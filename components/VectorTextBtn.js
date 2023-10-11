import React from "react";
import { Touchable, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

function VectorTextBtn({
  name,
  color,
  size,
  onPress,
  style,
  textStyle,
  title,
}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <MaterialCommunityIcons name={name} color={color} size={size} />
      <AppText style={textStyle}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VectorTextBtn;
