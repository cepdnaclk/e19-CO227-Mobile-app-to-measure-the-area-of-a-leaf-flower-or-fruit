import React, { useEffect, useRef, useState } from "react";

import { View, StyleSheet, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import AppButton from "../components/AppButton";

function CameraTest(props) {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  // use the camera

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // save the image

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Picture save");
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // no permission for camera

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          autoFocus="on"
          WhiteBalance="auto"
          ref={cameraRef}
          ratio="16:9"
          
        ></Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera}></Image>
      )}

      {!image ? (
        <View>
          <AppButton title={"click"} onPress={takePicture}></AppButton>
          <AppButton
            title={"flash"}
            onPress={() =>
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              )
            }
          ></AppButton>
        </View>
      ) : (
        <View>
          <AppButton
            title={"retake"}
            onPress={() => setImage(null)}
          ></AppButton>
          <AppButton title={"Save"} onPress={() => saveImage()}></AppButton>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  camera: {
    flex: 1,
  },
});

export default CameraTest;
