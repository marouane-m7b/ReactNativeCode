import ViewExemple from "./components/ViewExemple";
import TextExemple from "./components/TextExemple";
import ImageExemple from "./components/ImageExemple";
import TextInputExemple from "./components/TextInputExemple";
import StyleSheetExemple from "./components/StyleSheetExemple";
import ScrollViewExemple from "./components/ScrollViewExemple";
import ButtonExemple from "./components/ButtonExemple";
import SwitchExemple from "./components/SwitchExemple";
import {
  Alert,
  Button,
  DrawerLayoutAndroid,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FlatListExemple from "./components/FlatListExemple";
import SectionListExemple from "./components/SectionListExemple";
import BackHandlerExemple from "./components/BackHandlerExemple";
import { useRef, useState } from "react";
import DrawerExemple from "./components/DrawerExemple";
import ToastAndroidExemple from "./components/ToastAndroidExemple";
export default function App() {
  return <ToastAndroidExemple />;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    width: 150,
    margin: 10,
    borderRadius: 10,
  },
});
