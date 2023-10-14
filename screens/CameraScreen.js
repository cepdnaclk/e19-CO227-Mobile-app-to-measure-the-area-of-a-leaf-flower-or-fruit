import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { windowWidth , windowHeight} from '../components/Dimetions';

import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import ImageButton from "../components/ImageButton";
import VectorButton from "../components/VectorButton";
import Screen from "./Screen";

function CameraScreen({navigation}) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isTakingPicture, setIsTakingPicture] = useState(false);
  

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const resetCamera = async () => {
    setIsTakingPicture(false); // Reset the flag
    setImage(null); // Clear the image
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(cameraStatus.status === 'granted');
    navigation.navigate('ProecessImageScreen', { resetCamera });
  };
  

  const toggleCameraType = () => {
    // Toggle between front and back cameras
    console.log('hi');
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraPermission && cameraRef.current && !isTakingPicture) {
      setIsTakingPicture(true); // Set the flag
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setIsTakingPicture(false); // Reset the flag after taking the picture
        console.log('Picture taken:', photo.uri);
        setImage(photo.uri);
        navigation.navigate('ProecessImageScreen', { imageUri: photo.uri });
      } catch (error) {
        console.error('Error taking picture:', error);
        setIsTakingPicture(false); // Reset the flag on error
      }
    }
  };


  const pickImage = async () => {
    if (galleryPermission) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.uri);
      }
    }
  };

  

  return (
    <Screen color="black">
      <View style={styles.container}>
        {cameraPermission && (
        <Camera
          ref={cameraRef}
          style={{ width: windowWidth, height: windowHeight - 175 , marginTop:1}}
          type={cameraType}
        />
      )}
        <View style={styles.menu}>
          <VectorButton
            name="history"
            color="white"
            size={40}
            style={{ padding: 15 }}
            onPress={() => navigation.navigate('HistoryScreen') } 
            
          ></VectorButton>
          <VectorButton
            name="image-outline"
            color="white"
            size={40}
            style={{ padding: 10 }}
            onPress={pickImage} disabled={!galleryPermission}
          ></VectorButton>
          <ImageButton
            image={require("../assets/AgroCam.png")}
            size={70}
            style={{ padding: 15 }}
            onPress={takePicture} 
            disabled={!cameraPermission}
            onPictureTaken={resetCamera}
          
          ></ImageButton>
          <VectorButton
            name="account-settings-outline"
            color="white"
            size={40}
            style={{ padding: 15 }}
          ></VectorButton>
          <VectorButton
            name="camera-flip-outline"
            color="white"
            size={40}
            style={{ padding: 15 }}
            onPress={toggleCameraType}
          ></VectorButton>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.black, paddingTop: 50, flex: 1 },
  menu: {
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
  },
});

export default CameraScreen;



//here i need to display the taken picture when i'm pressed the history button




/*import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraPermission && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
    }
  };

  const pickImage = async () => {
    if (galleryPermission) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {cameraPermission && (
        <Camera
          ref={cameraRef}
          style={{ width: 300, height: 300 }}
          type={Camera.Constants.Type.back}
        />
      )}
      <Button title="Take a Picture" onPress={takePicture} disabled={!cameraPermission} />
      <Button title="Pick an Image from Gallery" onPress={pickImage} disabled={!galleryPermission} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}*/

