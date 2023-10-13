import { StyleSheet, Text, View } from "react-native";
import ReportScreen from "./screens/ReportScreen";
import Screen from "./screens/Screen";
import AppButton from "./components/AppButton";
import CameraScreen from "./screens/CameraScreen";
import FocuScreen from "./screens/FocuScreen";
import SignScreen from "./screens/SignScreen";
import ProecessImageScreen from "./screens/ProecessImageScreen";
import HistoryScreen from "./screens/HistoryScreen";
import AddDataScreen from "./screens/AddDataScreen";
import FetchTest from "./screens/FetchTest";
import CameraTest from "./screens/CameraTest";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
  return <HistoryScreen/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
