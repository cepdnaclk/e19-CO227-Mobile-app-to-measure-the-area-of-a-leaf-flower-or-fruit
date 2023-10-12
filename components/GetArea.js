import React from "react";
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

import { View, StyleSheet } from "react-native";

function GetArea({ focus }) {
    const htmlContent = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script async src="https://docs.opencv.org/master/opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>
    
        <style>
            /* Style for the trackbar container */
            .slider-container {
            width: 300px;
            margin: 20px;
            }
    
            /* Style for the trackbar input element */
            input[type="range"] {
            width: 100%;
            }
    
            /* Style for the value label */
            .slider-value {
            text-align: center;
            }
    
            .details {
                float: left;
            }
    
            .break {
                height: 100px;
                width: 50%;
            }
        </style>
    
    </head>
    
    <body>
        <canvas id="canvas"></canvas>
        <div class="details">
            <div class="break"> </div>
            <input type="file" id="fileInput" accept="image/*">
            <button onclick="buttonPressed(50)">Process Image</button>
        
            <div class="slider-container">
                <!-- Input element for the trackbar -->
                <input type="range" min="0" max="255" value="120" id="slider">
                
                <!-- Display the current value -->
                <div class="slider-value">Focus: <span id="slider-value">120</span></div>
            </div>
        </div>
        <script>
    
    
            let src;
            let dst;
            let loaded = false;
            let thresholdValue;
            let refArea = 0;
    
            // JavaScript to update the value display
            const slider = document.getElementById("slider");
            const sliderValue = document.getElementById("slider-value");
    
            //slider listner
    
            slider.addEventListener("input", () => {
                sliderValue.textContent = slider.value;
                thresholdValue = parseInt(slider.value, 10);
                processImage(thresholdValue, refArea);
            });
    
            // Callback when OpenCV.js is ready
            function onOpenCvReady() {
                // Initialize OpenCV.js
                cv.onRuntimeInitialized = function () {
                    loaded = true;
                };
            }
    
            //when process button is pressed
            function buttonPressed(slider) {
                processImage(slider) ;
            }
    
    
            // Function to handle image processing
            function processImage(slider) {
    
                if (!loaded) {
                    console.error('OpenCV.js is not loaded yet.');
                    return;
                }
                // Get the input file element
                const fileInput = document.getElementById('fileInput');
    
                // Check if a file is selected
                if (fileInput.files.length === 0) {
                    console.error('No image selected.');
                    return;
                }
    
                // Get the selected file
                const file = fileInput.files[0];
    
                // Create an HTMLImageElement to display the selected image
                const img = new Image();
                img.src = URL.createObjectURL(file);
    
                img.onload = function () {
                    // Get the canvas element
                    const canvas = document.getElementById('canvas');
    
                    // Set canvas dimensions to match the image
    
                    canvas.width = 380;
                    canvas.height = 554;
    
                    // Get the 2D drawing context of the canvas
                    const ctx = canvas.getContext('2d');
    
                    // Draw the image on the canvas
                    ctx.drawImage(img, 0, 0, 380, 554);       // there is an error in this part should be 380, 554
    
                    // Load the image from the canvas using OpenCV.js
                    src = cv.imread(canvas);
                    let src2 = src.clone();
                    let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
                    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
                    cv.threshold(src, src, slider, 255, cv.THRESH_BINARY);
                    cv.bitwise_not(src, src)
    
                    let contours = new cv.MatVector();
                    let contours2 = new cv.MatVector();
                    let hierarchy = new cv.Mat();
    
                    cv.findContours(src, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_NONE);
                
                    let color = new cv.Scalar(0, 0, 225);
                    
                    // finding largest and second largest contours
                    let largestContour; let secondLargestContour ;
                    if (contours.size() >= 2) {
                        largestContour = contours.get(0);
                        secondLargestContour = contours.get(1);
    
                        for (let i = 2; i < contours.size(); i++) {
                            let currentContour = contours.get(i);
    
                            if (cv.contourArea(currentContour) > cv.contourArea(largestContour)) {
                                secondLargestContour = largestContour;
                                largestContour = currentContour;
                                
                            } else if (cv.contourArea(currentContour) > cv.contourArea(secondLargestContour)) {
                                secondLargestContour = currentContour;
                            }
                        }
    
                        contours2.push_back(secondLargestContour); //////////////////////// change to largest counter when needed
                        cv.drawContours(src2, contours2, -1, color, 2);
    
                        // Area text for the Largest contour
    
                        let area = cv.contourArea(secondLargestContour) * 526/210520;
                        let boundingRect = cv.boundingRect(secondLargestContour);
                        let text = 'Area: ' + area + ' cm2';
    
                        let x = boundingRect.x;
                        let y = boundingRect.y;
    
                        let position = new cv.Point(x, y); // (x, y) coordinates of the text position
                        let fontFace = cv.FONT_HERSHEY_SIMPLEX;
                        let fontScale = 0.6;
                        let color2 = new cv.Scalar(0, 0, 255); // BGR color (red in this case)
                        let thickness = 1;
                        
                        cv.putText(src2, text, position, fontFace, fontScale, color2, thickness);
    
                            
                    } else {
                        console.error('There are not enough contours to find the largest and second largest.');
                    }
    
                    cv.imshow(canvas, src2);
                    src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); src2.delete();
    
                };
            }
    
        </script>
        
    </body>
    </html>
    
    `;
    

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <WebView
            source={{ html: htmlContent }}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    Padding: 10,
    paddingTop: 10,
    borderRadius: 15,
    width: "100%",
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default GetArea;