import React from "react";

import { View, StyleSheet, StatusBar } from "react-native";

function Screen({ children, color = "white" }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default Screen;
