import React, { useState } from "react";

import { View, StyleSheet, TextInput } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

// database
import { db } from "../config";
import { ref, set, push } from "firebase/database";

function AddDataScreen(props) {
  // take email and plant data and update in firebase, scan id is auto generated.
  const email = "john"; //

  const [area, setArea] = useState(""); // lara
  const [name, setName] = useState(""); // mahesha
  const [latitude, setLatitude] = useState(""); // mahesha
  const [longitude, setLongitude] = useState(""); //  //mahesha

  const [body, setBody] = useState("hello"); //  example

  const addData = () => {
    const dataToSave = {
      email: email,
      name: name,
      area: area,
      location: {
        latitude: latitude, // Replace with the actual latitude value
        longitude: longitude, // Replace with the actual longitude value
      },
      body: body,
    };

    const postsRef = ref(db, "data");
    const newPostRef = push(postsRef, dataToSave);

    newPostRef
      .then((snapshot) => {
        setBody("");
        console.log("Data added successfully with ID: " + snapshot.key);
      })
      .catch((error) => {
        console.error("Error adding data: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <AppText>Add your data</AppText>
      <TextInput
        style={styles.input}
        value={area}
        placeholder="Area"
        onChangeText={(text) => setArea(text)}
      ></TextInput>

      <AppButton
        title="button"
        style={styles.btn}
        onPress={() => addData()}
      ></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  input: {
    marginVertical: 30,
    alignSelf: "center",
    width: 100,
    height: 30,
    borderColor: "black",
  },
});

export default AddDataScreen;
