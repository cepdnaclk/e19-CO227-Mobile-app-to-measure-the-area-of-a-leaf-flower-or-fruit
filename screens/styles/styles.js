import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export const customStyles4 = StyleSheet.create({
  thumb: {
    backgroundColor: "#107500",
    borderColor: colors.colorTwo,
    borderRadius: 10,
    borderWidth: 5,
    height: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    width: 20,
  },
  track: {
    backgroundColor: colors.black,
    borderRadius: 4,
    height: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
});
