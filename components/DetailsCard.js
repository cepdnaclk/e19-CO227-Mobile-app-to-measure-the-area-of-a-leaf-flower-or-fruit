import React from "react";

import { View, StyleSheet } from "react-native";
import OneData from "./OneData";

function DetailsCard({ style, data }) {
  return (
    <View style={[styles.container, style]}>
      <OneData title={"Name"} data={data.name}></OneData>
      <OneData title={"Area"} data={data.area}></OneData>
      <OneData title={"Botanical Name"} data={data.botanicalName}></OneData>
      <OneData title={"Family"} data={data.family}></OneData>
      <OneData title={"Order"} data={data.order}></OneData>
      <OneData title={"Kingdom"} data={data.kingdom}></OneData>
      <OneData title={"Longitude"} data={data.location.longitude}></OneData>
      <OneData title={"Latitude"} data={data.location.latitude}></OneData>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    Padding: 10,
    paddingTop: 10,
    borderRadius: 15,
    width: "100%",
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default DetailsCard;
