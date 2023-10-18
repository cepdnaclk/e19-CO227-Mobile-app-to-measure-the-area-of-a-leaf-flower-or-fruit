import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import leafdata from "../config/leafdata";

const Predict = ({ route }) => {
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    if (!route || !route.params) {
      console.error("Route or route.params is undefined:", route);
      return;
    }
    const { imageURL } = route.params;
    console.log("Image URL:", imageURL);
  }, [route]);

  const handleMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data && data.prediction) {
      setPrediction(data.prediction);
    }
  };
  const BotanicalNames = {
    Class1: "Amba kole",
    Class2: "Rathmal",
    Class3: "Gotukola",
    Class4: "Boo kolee",
    Class5: "saman pichcha",
    Class6: "nuga kole",
    Class7: "patapata kanda kole",
    Class8: "Bamboo wage kole",
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          html: getHTMLContent({ imageUrl: route.params?.imageURL }),
        }}
        style={{ flex: 1 }}
        onMessage={handleMessage}
      />
      <Text style={styles.predictionText}>Prediction: {prediction}</Text>

      {leafdata[prediction] ? (
        <>
          <Text style={styles.predictionText}>
            Name: {leafdata[prediction].name}
          </Text>
          <Text style={styles.predictionText}>
            Botanical Name: {leafdata[prediction].botanicalName}
          </Text>
          <Text style={styles.predictionText}>
            Family: {leafdata[prediction].family}
          </Text>
          <Text style={styles.predictionText}>
            order: {leafdata[prediction].order}
          </Text>
          <Text style={styles.predictionText}>
            Kingdom: {leafdata[prediction].kingdom}
          </Text>
        </>
      ) : (
        <Text style={styles.predictionText}>
          No data available for this prediction.
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  predictionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    alignContent: "center",
  },
});

const getHTMLContent = ({ imageUrl }) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teachable Machine Image Model</title>
</head>

<body>
    <div>Teachable Machine Image Model</div>
    <div id="label-container"></div>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"></script>
    <script>
        let URL, model, labelContainer, maxPredictions;

        async function init() {
            const modelPath = 'https://teachablemachine.withgoogle.com/models/7c9p_26kp/';
            const modelURL = modelPath + "model.json";
            const metadataURL = modelPath + "metadata.json";
            
            try {
                console.log("Loading model...");
                model = await tmImage.load(modelURL, metadataURL);
                maxPredictions = model.getTotalClasses();

                labelContainer = document.getElementById("label-container");
                for (let i = 0; i < maxPredictions; i++) {
                    labelContainer.appendChild(document.createElement("div"));
                }

                // Set the URL after the model is loaded successfully
                URL = "${imageUrl}";
                console.log("Model loaded successfully. Predicting...");
                predict();
            } catch (error) {
                console.error("Error loading the model:", error);
            }
        }

        async function predict() {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = URL;

            img.onload = async function () {
                try {
                    const prediction = await model.predict(img);

                    // Find the index with the maximum probability
                    let maxIndex = 0;
                    for (let i = 1; i < maxPredictions; i++) {
                        if (prediction[i].probability > prediction[maxIndex].probability) {
                            maxIndex = i;
                        }
                    }

                    // Display the most predicted class name
                    const mostPredictedClass = prediction[maxIndex].className;
                    labelContainer.innerHTML = mostPredictedClass;

                    // Send the most predicted class name to React Native
                    window.ReactNativeWebView.postMessage(JSON.stringify({ prediction: mostPredictedClass }));

                    console.log("Prediction successful.");
                } catch (error) {
                    console.error("Error predicting from URL:", error);
                }
            };
        }

        // Initialize the model when the page loads
        window.onload = () => {
            console.log("Initializing model...");
            init();
        };
    </script>
</body>

</html>
  `;
};

export default Predict;
