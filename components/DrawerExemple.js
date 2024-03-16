import { useRef, useState } from "react";
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

function DrawerExemple() {
  const Separator = () => <View style={styles.separator} />;
  const drawerRef = useRef();
  const [position, setPosition] = useState("left");
  const changePosition = () => {
    position === "left" ? setPosition("right") : setPosition("left");
  };

  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => (
        <View style={styles.container}>
          <Text>Drawer Content</Text>
          <Button
            title="Close Drawer"
            onPress={() => drawerRef.current.closeDrawer()}
          ></Button>
        </View>
      )}
      drawerPosition={position}
      drawerWidth={340}
      ref={drawerRef}
      drawerBackgroundColor={"rgb(255,255,255)"}
      drawerLockMode="unlocked"
      onDrawerClose={() => {
        console.log("Closed");
      }}
      onDrawerOpen={() => {
        console.log("Opened");
      }}
      onDrawerSlide={(e) => {
        console.log(e.nativeEvent.offset);
      }}
    onDrawerStateChanged={()=>{
        console.log('state changed');
    }}
    statusBarBackgroundColor={'lightblue'}
    >
      <View style={styles.container}>
        <Button
          title="Open Drawer"
          onPress={() => drawerRef.current.openDrawer()}
        ></Button>
        <Button title="Change Position" onPress={changePosition}></Button>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            Adjust the color in a way that looks standard on each platform. On
            iOS, the color prop controls the color of the text. On Android, the
            color adjusts the background color of the button.
          </Text>
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            All interaction for the component are disabled.
          </Text>
          <Button
            title="Press me"
            disabled
            onPress={() => Alert.alert("Cannot press this one")}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
          <View style={styles.fixToText}>
            <Pressable
              style={[styles.button]}
              onPress={() => Alert.alert("Left button pressed")}
            >
              <Text>Pressable</Text>
            </Pressable>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => Alert.alert("Right button pressed")}
            >
              <Text>TouchableOpacity</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
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

export default DrawerExemple;
