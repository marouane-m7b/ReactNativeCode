import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

function ActivityIndicatorExemple() {
  return (
    <ActivityIndicator
      style={{ backgroundColor: "gray" }}
      animating={true}
      size={30}
      color={"white"}
    />
  );
}

export default ActivityIndicatorExemple;
