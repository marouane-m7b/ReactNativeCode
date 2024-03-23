import { Button, Linking, Text, View } from "react-native";

function LinkingExemple() {
  return (
    <View>
      <Button title="email" onPress={() => Linking.openURL("mailto:test@test.com")} />
      <Button title="tel" onPress={() => Linking.openURL("tel:+212600000000")} />
      <Button title="sms" onPress={()=>Linking.openURL("sms:+212600000000")}/>
      <Button title="lien" onPress={()=>Linking.openURL('https://reactnative.dev/docs/linking')}/>
      <Button title="parametres" onPress={()=>Linking.openSettings()}/>
      <Button title="Battery" onPress={()=>Linking.sendIntent("android.intent.action.POWER_USAGE_SUMMARY")}/>
      <Button title="Map" onPress={()=>Linking.openURL("geo:33.6082,-7.6327")} />
    </View>
  );
}

export default LinkingExemple;
