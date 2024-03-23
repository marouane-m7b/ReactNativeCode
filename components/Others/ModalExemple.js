import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

function ModalExemple() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <Modal
        visible={modalIsVisible}
        animationType="fade"
        transparent={true}
        onShow={() => console.log("show2")}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Text>This is our modal</Text>
            <Button
              title="CloseModalI"
              onPress={() => setModalIsVisible(false)}
            />
          </View>
        </View>
      </Modal>
      <Button title="OpenModal" onPress={() => setModalIsVisible(true)} />
    </View>
  );
}

export default ModalExemple;
