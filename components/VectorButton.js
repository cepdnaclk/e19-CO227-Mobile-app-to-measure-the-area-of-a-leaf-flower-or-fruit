import React from "react";
import { Touchable, TouchableOpacity, View, StyleSheet
 } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function VectorButton({ name, color, size, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <MaterialCommunityIcons name={name} color={color} size={size} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default VectorButton;
