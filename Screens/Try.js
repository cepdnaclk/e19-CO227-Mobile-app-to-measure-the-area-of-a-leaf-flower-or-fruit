import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Instructions from './Instructions';

const Try = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const next = () => {
    setShowInstructions(true);
  };

  return (
    <View style={styles.container}>
      {!showInstructions ? (
        <>
          <Text style={styles.text}>Hello, React Native!</Text>
          <Button onPress={next} title="Next" style={styles.button}></Button>
        </>
      ) : (
        <Instructions />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: '#fff', // Background color of the container
  },
  text: {
    fontSize: 24, // Font size of the text
    fontWeight: 'bold', // Font weight (bold)
    color: 'blue', // Text color
  },
  button: {
    margin: 10,
    padding: 50,
  },
});

export default Try;
