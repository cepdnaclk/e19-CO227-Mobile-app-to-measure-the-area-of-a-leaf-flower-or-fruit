import React from "react";

import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ firstName, email, imageUrl }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{firstName}</AppText>
        <AppText style={styles.subtitle}>{email}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  textContainer: {
    paddingHorizontal: 20,
  },

  subtitle: {
    color: colors.gray,
    paddingVertical: 4,
  },

  title: {
    paddingVertical: 4,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ListItem;
