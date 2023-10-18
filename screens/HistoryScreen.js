import { useEffect, useState } from "react";
import React from "react";
import { db } from "../config";
import { ref, get } from "firebase/database";

import {
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";

import Screen from "./Screen";
import colors from "../config/colors";

import AppText from "../components/AppText";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";
import ImageButton from "../components/ImageButton";

function HistoryScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);
  const [dataArray, setDataArray] = useState(null);

  const pressGoBack = () => {
    navigation.navigate("CameraScreen");
  };

  // database operation.
  const postsRef = ref(db, "data");

  useEffect(() => {
    get(postsRef)
      .then((snapshot) => {
        setDataArray(
          Object.entries(snapshot.val()).map(([id, item]) => ({ id, ...item }))
        );
        setIsLoading(false);
      })

      .catch((error) => {
        console.error("Error" + error);
        setError(error);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.indicatorView}>
        <ActivityIndicator
          size="large"
          color={colors.color2}
        ></ActivityIndicator>
      </View>
    );
  }

  // show error message

  if (error) {
    return (
      <View style={styles.indicatorView}>
        <AppText>Error encountered while fetching the data...</AppText>
      </View>
    );
  }

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <ImageButton
            style={styles.imageBtn}
            image={require("../assets/back-to.png")}
            size={45}
            onPress={() => pressGoBack()}
          ></ImageButton>
          <TextInput
            placeholder="Enter Name or ID of leaf"
            style={styles.text}
            clearButtonMode="always"
            autoCapitalize="none"
            value={searchQuery}
            onChangeText={(query) => setSearchQuery(query)}
          ></TextInput>
        </View>

        <View style={styles.flatListContainer}>
          <FlatList
            data={dataArray.filter(
              (item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.id.includes(searchQuery)
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItem
                onPress={() =>
                  navigation.navigate("ReportScreen", {
                    item: item,
                  })
                }
                firstName={item.name}
                id={item.id && item.id.substring(1).toUpperCase()}

                // imageUrl={item.picture.\\\\\}
              ></ListItem>
            )}
            ItemSeparatorComponent={ListItemSeparator}
          ></FlatList>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: colors.color4,
  },

  topContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  text: {
    height: 45,
    borderColor: colors.colorTwo,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 25,
    flex: 1,
  },

  flatListContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    flex: 1,
  },

  indicatorView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default HistoryScreen;
