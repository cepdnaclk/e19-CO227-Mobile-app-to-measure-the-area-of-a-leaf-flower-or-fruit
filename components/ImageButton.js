import React from "react";

import { TouchableOpacity, StyleSheet, Image } from "react-native";
function ImageButton({ image, size, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Image
        style={[styles.image, { height: size }, { width: size }]}
        source={image}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {},
  container: {},
});

export default ImageButton;
