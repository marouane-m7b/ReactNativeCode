// import ViewExemple from "./components/ViewExemple";
// import TextExemple from "./components/TextExemple";
// import ImageExemple from "./components/ImageExemple";
// import TextInputExemple from "./components/TextInputExemple";
// import StyleSheetExemple from "./components/StyleSheetExemple";
// import ScrollViewExemple from "./components/ScrollViewExemple";
// import ButtonExemple from "./components/ButtonExemple";
// import SwitchExemple from "./components/SwitchExemple";
import { ScrollView, StyleSheet, Text } from "react-native";
export default function App() {

  return (
    <ScrollView style={{flex: 1, marginTop: 25}}>
      {/* <Text style={styles.header}>View</Text>
      <ViewExemple/> */}
      {/* <Text style={styles.header}>Text</Text>
      <TextExemple/> */}
      {/* <Text style={styles.header}>Image</Text>
      <ImageExemple/> */}
      {/* <Text style={styles.header}>TextInput</Text>
      <TextInputExemple/> */}
      {/* <Text style={styles.header}>StyleSheet</Text>
      <StyleSheetExemple/> */}
      {/* <Text style={styles.header}>ScrollView</Text>
      <ScrollViewExemple/> */}
      {/* <Text style={styles.header}>Button</Text>
      <ButtonExemple/> */}
      {/* <Text style={styles.header}>Switch</Text>
      <SwitchExemple/> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header : {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  }
})