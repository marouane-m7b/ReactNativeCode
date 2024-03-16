import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

function SectionListExemple() {
  const apiData = [
    {
      Categorie: "Tech",
      data: [
        {
          title: "Post 1",
          body: "This is the body of post 1.",
          userId: 1,
          id: "1",
          views: 26,
        },
        {
          title: "Post 2",
          body: "This is the body of post 2.",
          userId: 2,
          id: "2",
          views: 392,
        },
        {
          title: "Post 3",
          body: "This is the body of post 3.",
          userId: 1,
          id: "3",
          views: 229,
        },
        {
          title: "Post 4",
          body: "This is the body of post 4.",
          userId: 3,
          id: "4",
          views: 192,
        },
      ],
    },
    {
      Categorie: "Clothes",
      data: [
        {
          title: "Post 5",
          body: "This is the body of post 5.",
          userId: 2,
          id: "5",
          views: 42,
        },
        {
          title: "Post 6",
          body: "This is the body of post 6.",
          userId: 3,
          id: "6",
          views: 527,
        },
      ],
    },
    {
      Categorie: "Sport",
      data: [
        {
          title: "Post 7",
          body: "This is the body of post 7.",
          userId: 1,
          id: "7",
          views: 253,
        },
        {
          title: "Post 8",
          body: "This is the body of post 8.",
          userId: 2,
          id: "8",
          views: 161,
        },
        {
          title: "Post 9",
          body: "This is the body of post 9.",
          userId: 3,
          id: "9",
          views: 277,
        },
        {
          title: "Post 10",
          body: "This is the body of post 10.",
          userId: 1,
          id: "10",
          views: 318,
        },
      ],
    },
  ];
  const [data, setData] = useState([]);

  const [isRefresh, setIsRefresh] = useState(false);

  const refreshHandler = async () => {
    setIsRefresh(true);
    // const res = await axios.get("lien");
    // setData(res.data);
    // setIsRefresh(false);
    setTimeout(() => {
      setData(apiData);
      setIsRefresh(false);
    }, 3000);
  };

  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.posts}>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
              <Text>{item.id}</Text>
              <Text>{item.views}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={{...styles.header, backgroundColor: 'lightblue'}}>{section.title}</Text>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <Text style={styles.header}>Header</Text>}
        ListFooterComponent={() => <Text style={styles.header}>Footer</Text>}
        ListEmptyComponent={() => <Text>No Data</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        onEndReached={() => console.log("end")}
        // refreshing={isRefresh}
        // onRefresh={refreshHandler}
        refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={refreshHandler}
            colors={["red", "green", "blue", "yellow", "pink", "black"]}
            progressBackgroundColor={"#eee"}
            size={"large"}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  posts: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#eee",
  },
  header: {
    backgroundColor: "#ec29ff",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
    padding: 10,
  },
  separator: {
    backgroundColor: "red",
    height: 2,
    margin: 10,
    padding: 1,
  },
});

export default SectionListExemple;
