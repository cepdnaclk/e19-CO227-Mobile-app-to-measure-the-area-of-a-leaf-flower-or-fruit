import React from "react";

import { View, StyleSheet } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

import colors from "../config/colors";
import Screen from "./Screen";
import ImageButton from "../components/ImageButton";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { customStyles4 } from "./styles/styles";
import VectorButton from "../components/VectorButton";

function FocuScreen(props) {
  return (
    <Screen color={colors.color3}>
      <View style={styles.container}>
        <View style={styles.upContainer}>
          <ImageButton
            image={require("../assets/back-to.png")}
            size={42}
            onPress={() => console.log("go back")}
          ></ImageButton>
          <View style={styles.area}>
            <AppText>Area</AppText>
            <View style={{ width: 1, height: 15, backgroundColor: "black" }} />
            <AppText>45.67 cm</AppText>
          </View>
          <AppButton
            title={"More"}
            style={{ paddingHorizontal: 20, marginLeft: 10 }}
            onPress={() => console.log("go to more")}
          ></AppButton>
        </View>
        <View style={styles.middleContainer}></View>
        <View style={styles.downContainer}>
          <AppText>Adjust to focus</AppText>

          <View style={styles.sliderView}>
            <Slider
              animateTransitions
              minimumTrackTintColor="#107500"
              thumbStyle={customStyles4.thumb}
              trackStyle={customStyles4.track}
            ></Slider>
          </View>

          <View style={styles.buttonView}>
            <VectorButton name="minus-box" size={40}></VectorButton>
            <View style={styles.foucusValue}>
              <AppText style={{ paddingHorizontal: 5 }}>97</AppText>
            </View>
            <VectorButton name="plus-box" size={40}></VectorButton>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  upContainer: {
    flex: 0.15,
    backgroundColor: colors.color3,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  area: {
    borderRadius: 30,
    backgroundColor: colors.colorTwo,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginLeft: 5,
    borderColor: "#e6e6e6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  middleContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: colors.white,
  },

  downContainer: {
    flex: 0.25,
    backgroundColor: colors.color3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  sliderView: {
    width: "95%",
  },

  buttonView: {
    flexDirection: "row",
  },
});

export default FocuScreen;
