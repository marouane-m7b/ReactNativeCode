import React from "react";
import { Alert, Button, Text } from "react-native";

function AlertExemple() {
  const handleAlert = () => {
    Alert.alert(
      "Notre alert",
      "message de l'alert",
      [
        { text: "Accepter", onPress: () => console.log("accepter") },
        { text: "Refuser", onPress: () => console.log("refuser") },
      ],
      { cancelable: true, onDismiss: () => console.log("dimiss") }
    );
  };

  return <Button onPress={handleAlert} title="Alert" />;
}

export default AlertExemple;
