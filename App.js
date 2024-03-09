import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import image from "./assets/splash.png";
import { useState } from "react";
export default function App() {
  const data = [
    {
      title: "Post 1",
      body: "This is the body of post 1.",
      id: "1",
      views: 26,
    },
    {
      title: "Post 2",
      body: "This is the body of post 2.",
      id: "2",
      views: 392,
    },
    {
      title: "Post 3",
      body: "This is the body of post 3.",
      id: "3",
      views: 229,
    },
    {
      title: "Post 4",
      body: "This is the body of post 4.",
      id: "4",
      views: 192,
    },
    {
      title: "Post 5",
      body: "This is the body of post 5.",
      id: "5",
      views: 42,
    },
    {
      title: "Post 6",
      body: "This is the body of post 6.",
      id: "6",
      views: 527,
    },
    {
      title: "Post 7",
      body: "This is the body of post 7.",
      id: "7",
      views: 253,
    },
    {
      title: "Post 8",
      body: "This is the body of post 8.",
      id: "8",
      views: 161,
    },
    {
      title: "Post 9",
      body: "This is the body of post 9.",
      id: "9",
      views: 277,
    },
    {
      title: "Post 10",
      body: "This is the body of post 10.",
      id: "10",
      views: 318,
    },
  ];
  const [enable, setEnable] = useState(false)
  return (
    <View style={styles.container}>
      <Switch value={enable} onChange={()=>setEnable(!enable)}
      trackColor={{false:'red', true:'green'}}
      thumbColor={'black'}
      disabled={true}
      />
    </View>
    // <ScrollView showsHorizontalScrollIndicator={false} horizontal={false} showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}
    // onScroll={(e)=>console.log(e.nativeEvent.contentOffset)}
    // keyboardDismissMode='none'
    // >
    //  <TextInput
    //   style={styles.inp}
    //   placeholder="Name Input"
    //   placeholderTextColor={"red"}
    //   onChangeText={(value) => console.log("changeText : ", value)}
    //   onBlur={() => console.log("blur")}
    //   onFocus={() => console.log("focus")}
    //   maxLength={99999}
    //   multiline={true}
    //   keyboardType="default"
    //   secureTextEntry={false}
    //   autoCapitalize="sentences"
    //   autoCorrect={true}
    //   onContentSizeChange={(e)=>console.log(e.nativeEvent.contentSize)}
    //   readOnly={true}

    //  {data.map((item) => {
    //   return (
    //     <View key={item.id} style={styles.posts}>
    //       <Text style={styles.txt}>{item.title}</Text>
    //       <Text style={styles.txt}>{item.body}</Text>
    //       <Text style={styles.txt}>{item.views}</Text>
    //       <TextInput style={styles.inp}></TextInput>
    //     </View>
    //   );
    // })}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  inp: {
    width: 300,
    // height: 40,
    backgroundColor: "white",
    color: "white",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  posts: {
    padding: 20,
    margin: 10,
    justifyContent: "center",
    backgroundColor: "gray",
    alignItems: "center",
    gap: 20,
  },
  txt: {
    fontSize: 22,
    color: "black",
  },
});

const styles2 = StyleSheet.create({
  posts: {
    backgroundColor: "red",
  },
});

const styles3 = StyleSheet.create({
  posts: {
    backgroundColor: "green",
  },
});

const all = StyleSheet.compose(
  styles.posts,
  false ? styles2.posts : styles3.posts
);
