import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from "react-native";

const screenDimensions = Dimensions.get("screen");
function DimensionExemple() {
    const windowDimensions = useWindowDimensions();
    
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimensions</Text>
      <Text>Width: {windowDimensions.width}</Text>
      <Text>Height: {windowDimensions.height}</Text>
      <Text>Scale: {windowDimensions.scale}</Text>
      <Text>FontScale: {windowDimensions.fontScale}</Text>
      <Text  style={styles.header}>Screen Dimensions</Text>
      <Text>Width: {screenDimensions.width}</Text>
      <Text>Height: {screenDimensions.height}</Text>
      <Text>Scale: {screenDimensions.scale}</Text>
      <Text>FontScale: {screenDimensions.fontScale}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: screenDimensions.width > 500 ? "gray" : "green",
  },
  header: {
    fontSize: 30,
  },
});

export default DimensionExemple;
