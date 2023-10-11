import React, { useState, useEffect } from "react";

import { View, StyleSheet } from "react-native";

import { db } from "../config";
import { ref, set, push, get, child } from "firebase/database";

import colors from "../config/colors";

function FetchTest(props) {
  specificId = "-NfuNdg3RKAekrfmprki";

  const postsRef0 = ref(db, "data");
  const postsRef = child(postsRef0, specificId);

  const [data, setData] = useState("");

  // fetch dta from firebase

  useEffect(() => {
    get(postsRef)
      .then((snapshot) => {
        const fetchedData = snapshot.val();
        setData(fetchedData);
        console.log(data);
      })

      .catch((error) => {
        console.error("Error" + error);
      });
  }, []);

  console.log(data);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color3,
  },
});

export default FetchTest;
