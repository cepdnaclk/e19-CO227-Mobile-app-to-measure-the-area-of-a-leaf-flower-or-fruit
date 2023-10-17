import React, { useState } from "react";

import { View, StyleSheet, TextInput } from "react-native";

// database
import { db } from "../config";
import { ref, set, push } from "firebase/database";

export function AddData(email, area, name, latitude, longitude) {
  // take email and plant data and update in firebase, scan id is auto generated.
  // const email = "john"; //

  //const [body, setBody] = useState("hello"); //  example

  const addData = () => {
    const dataToSave = {
      email: email,
      name: name,
      area: area,
      location: {
        latitude: latitude, // Replace with the actual latitude value
        longitude: longitude, // Replace with the actual longitude value
      },
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
}
