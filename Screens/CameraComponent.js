import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraComponent = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    // Check for camera permissions or request them here if needed
  }, []);

  const takePicture = async () => {
    if (cameraRef.current && isCameraReady) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setCapturedPhoto(data);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  const resetCamera = () => {
    setCapturedPhoto(null);
  };

  return (
    <View style={styles.container}>
      {capturedPhoto ? (
        <>
          <Text style={styles.title}>Captured Photo</Text>
          <TouchableOpacity onPress={resetCamera} style={styles.captureButton}>
            <Text style={styles.buttonText}>Retake</Text>
          </TouchableOpacity>
          <Image source={{ uri: capturedPhoto.uri }} style={styles.previewImage} />
        </>
      ) : (
        <>
          <RNCamera
            ref={cameraRef}
            style={styles.camera}
            onCameraReady={() => setIsCameraReady(true)}
          />
          <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
            <Text style={styles.buttonText}>Take Picture</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureButton: {
    alignSelf: 'center',
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  previewImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default CameraComponent;
