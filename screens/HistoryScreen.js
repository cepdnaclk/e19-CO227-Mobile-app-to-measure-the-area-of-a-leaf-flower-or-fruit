import { useEffect, useState } from "react";
import React from "react";

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

const API_ENDPOINT = "https://randomuser.me/api/?results=30";

function HistoryScreen(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setIsLoading(false);
      const formattedJson = JSON.stringify(json.results, null, 2);
      console.log(formattedJson);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // show indicator while data is loading

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
        <TextInput
          placeholder="Enter search term"
          style={styles.text}
          clearButtonMode="always"
          autoCapitalize="none"
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
        ></TextInput>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.login.username}
            renderItem={({ item }) => (
              <ListItem
                firstName={item.name.first}
                email={item.email}
                imageUrl={item.picture.thumbnail}
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
  },

  text: {
    height: 50,
    borderColor: colors.lightGray,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 20,
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
