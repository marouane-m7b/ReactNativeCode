import React, { useEffect } from "react";
import { ActivityIndicator, Alert, BackHandler, Text } from "react-native";

function BackHandlerExemple() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        Alert.alert(
          "Exit App",
          "Are you sure ?",
          [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            {
              text: "Exit",
              onPress: () => {
                handleExit();
              },
              style: "destructive",
            },
          ],
          { cancelable: true }
        );

        return true;
      }
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  const handleExit = () => {
    console.log("Exit");
    BackHandler.exitApp();
  };

  return <Text>Back</Text>;
}

export default BackHandlerExemple;
