import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Screen from './Screen';
import colors from '../config/colors';
import VectorTextBtn from '../components/VectorTextBtn';
import {firebase} from '../config'; // Import the Firebase library

function ProecessImageScreen({ route, navigation }) {
  const { savedImage } = route.params;
  const currentUser = firebase.auth().currentUser; // Get the currently authenticated user

  const uploadImageToFirebase = async (imageUri) => {
    try {
      // Get a reference to the Firestore collection where you want to store the user data
      const userCollection = firebase.firestore().collection('users');

      // Create a document with the user's UID as the document ID
      const userDoc = userCollection.doc(currentUser.uid);

      // Update the user document with the image URL
      await userDoc.update({
        imageUrl: imageUri,
      });

      console.log('Image URL updated in Firestore:', imageUri);
    } catch (error) {
      console.error('Error updating image URL in Firestore:', error);
    }
  }

  return (
    <Screen color={colors.color4}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: savedImage }} style={{ width: '100%', height: '100%' }} />
        </View>
      </View>
      <View style={styles.downPart}>
        <VectorTextBtn
          name="camera-retake"
          size={40}
          title="camera-retake"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
          onPress={() => navigation.navigate('CameraScreen')}
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
          onPress={() => {
            // Call the function to upload the image to Firebase
            uploadImageToFirebase(savedImage);
            // You can add additional navigation logic here
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
  imgContainer: {
    flex: 1,
    backgroundColor: colors.color3,
  },
  downPart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.15,
    paddingHorizontal: 10,
  },
});

export default ProecessImageScreen;

/*import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Screen from './Screen';
import colors from '../config/colors';
import VectorTextBtn from '../components/VectorTextBtn';
import {firebase} from '../config'; // Import the Firebase library

function ProecessImageScreen({ route, navigation }) {
  const { savedImage } = route.params;
  const currentUser = firebase.auth().currentUser; // Get the currently authenticated user

  const uploadImageToFirebase = async (imageUri) => {
    try {
      // Get a reference to the Firestore collection where you want to store the user data
      const userCollection = firebase.firestore().collection('users');

      // Create a document with the user's UID as the document ID
      const userDoc = userCollection.doc(currentUser.uid);

      // Update the user document with the image URL
      await userDoc.update({
        imageUrl: imageUri,
      });

      console.log('Image URL updated in Firestore:', imageUri);
    } catch (error) {
      console.error('Error updating image URL in Firestore:', error);
    }
  }

  return (
    <Screen color={colors.color4}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: savedImage }} style={{ width: '100%', height: '100%' }} />
        </View>
      </View>
      <View style={styles.downPart}>
        <VectorTextBtn
          name="camera-retake"
          size={40}
          title="camera-retake"
          textStyle={{ fontSize: 8, paddingVertical: 0 }}
          onPress={() => navigation.navigate('CameraScreen')}
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
          onPress={() => {
            // Call the function to upload the image to Firebase
            uploadImageToFirebase(savedImage);
            // You can add additional navigation logic here
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
  imgContainer: {
    flex: 1,
    backgroundColor: colors.color3,
  },
  downPart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.15,
    paddingHorizontal: 10,
  },
});

export default ProecessImageScreen; */