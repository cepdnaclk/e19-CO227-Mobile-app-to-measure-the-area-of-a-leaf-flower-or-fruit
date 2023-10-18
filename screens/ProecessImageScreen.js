import React, { useState } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import Screen from "./Screen";
import colors from "../config/colors";
import VectorTextBtn from "../components/VectorTextBtn";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config";

function ProecessImageScreen({ route, navigation }) {
  const { savedImage } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const goNext = (downloadURL) => {
    navigation.navigate("FocuScreen", { imageUri: downloadURL });
  };

  const uploadImageToFirebaseStorage = async (localUri) => {
    try {
      // Get the current date and time
      const currentDate = new Date();

      // Format the date and time as a string without special characters
      const formattedDateTime = currentDate.toISOString().replace(/[-T:]/g, "");

      // Generate a unique filename using the formatted date and time
      const uniqueFileName =
        formattedDateTime + "_" + Math.random().toString(36).substring(2, 8);

      // Get a reference to your Firebase Cloud Storage
      const storageRef = ref(storage, "your-storage-folder/" + uniqueFileName);

      // Convert the local image URI to a Blob
      const response = await fetch(localUri);
      const blob = await response.blob();

      // Upload the image to Firebase Cloud Storage
      const snapshot = await uploadBytes(storageRef, blob);

      // Get the public download URL for the uploaded image
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log("Image uploaded to Firebase Cloud Storage:", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image to Firebase Cloud Storage:", error);
    }
  };

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

  return (
    <Screen color={colors.color4}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: savedImage }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.downPart}>
        <VectorTextBtn
          name="camera-retake"
          size={40}
          title="camera-retake"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
          onPress={() => navigation.navigate("CameraScreen")}
        />
        <VectorTextBtn
          name="rotate-right"
          size={40}
          title="Rotate right"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
        />
        <VectorTextBtn
          name="rotate-left"
          size={40}
          title="Rotate left"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
        />
        <VectorTextBtn
          name="page-next"
          size={40}
          title="Next"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
          onPress={async () => {
            setIsLoading(true);
            const downloadURL = await uploadImageToFirebaseStorage(savedImage);
            goNext(downloadURL);
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color4,
  },

  indicatorView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    backgroundColor: colors.color3,
  },
  downPart: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.15,
    paddingHorizontal: 10,
  },
});

export default ProecessImageScreen;
