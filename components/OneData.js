import React from "react";

import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
function OneData({ title, data }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.data}>{data}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },

  data: {},
  title: {},
});

export default OneData;
