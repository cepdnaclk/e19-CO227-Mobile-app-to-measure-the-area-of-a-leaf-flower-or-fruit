import React, { useEffect, useState } from "react";

import { View, StyleSheet } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

import colors from "../config/colors";
import Screen from "./Screen";
import ImageButton from "../components/ImageButton";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { customStyles4 } from "./styles/styles";
import VectorButton from "../components/VectorButton";
import GetArea from "../components/GetArea";

function FocuScreen({ navigation }) {
  const [focusValue, setFocusValue] = useState(0);
  // console.log(route.params.base64);

  const id = "-NgxNUSg4jhQHQx8tp7L";
  const email = "kk@gmail.com";
  const area = "112.59 cm ";
  const name = "Bodhi Tree";
  const botanicalName = "Ficus religiosa";
  const family = "Moraceae";
  const order = "Rosales";
  const kingdom = "Plantae";

  const location = { latitude: 7.265, longitude: 80.38 };
  const item2 = {
    id: id,
    email: email,
    area: area,
    name: name,
    location: location,
    botanicalName: botanicalName,
    family: family,
    order: order,
    kingdom: kingdom,
  };

  const pressMore = () => {
    navigation.navigate("ReportScreen", { item2: item2 });
  };

  const pressBack = () => {
    navigation.navigate("ProecessImageScreen");
  };

  const incrementFocus = () => {
    // Check if the value is already at the maximum
    if (focusValue < 255) {
      setFocusValue(Math.min(255, Math.round(focusValue + 1)));
    }
  };

  const decrementFocus = () => {
    // Check if the value is already at the minimum
    if (focusValue > 0) {
      setFocusValue(Math.min(255, Math.round(focusValue - 1)));
    }
  };

  // useEffect(() => {
  //   AddData(email, area, name, latitude, longitude);
  // }, []);

  return (
    <Screen color={colors.color3}>
      <View style={styles.container}>
        <View style={styles.upContainer}>
          <ImageButton
            image={require("../assets/back-to.png")}
            size={42}
            onPress={() => pressBack()}
          ></ImageButton>
          <View style={styles.area}>
            <AppText style={styles.topic}>Change the focus</AppText>
          </View>
          <AppButton
            title={"More"}
            style={{ paddingHorizontal: 20, marginLeft: 10 }}
            onPress={() => pressMore()}
          ></AppButton>
        </View>
        <View style={styles.middleContainer}>
          {/*get area <GetArea {focus}/> comes here use usesatate for synchronizing*/}
          <GetArea focus={focusValue} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topic: {
    alignSelf: "center",
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
    justifyContent: "center",
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
