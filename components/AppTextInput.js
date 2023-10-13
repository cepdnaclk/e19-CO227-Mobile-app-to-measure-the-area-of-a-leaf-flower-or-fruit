import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";

function AppTextInput({ placeholder, style, onChangeText }) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  textInput: {
    width: "100%",
    height: 50,
    borderColor: colors.black,
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
});

export default AppTextInput;
