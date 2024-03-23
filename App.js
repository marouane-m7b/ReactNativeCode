import { View } from "react-native";
import StatusBarExemple from "./components/Others/StatusBarExemple";


export default function App() {
  return (
    <View
      style={{ height: 800, justifyContent: "center", alignItems: "center" }}
    >
      <StatusBarExemple />
    </View>
  );
}
