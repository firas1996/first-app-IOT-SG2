import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [imp, setImp] = useState("");
  const [DATA, setDATA] = useState([]);
  const addItem = () => {
    if (imp.trim().length > 0) {
      setDATA([...DATA, { id: Math.random(), name: imp, isFav: false }]);
      setImp("");
    }
    console.log(DATA);
  };
  const updateItem = (id) => {
    setDATA(
      DATA.map((item) => {
        return item.id === id ? { ...item, isFav: !item.isFav } : item;
      })
    );
  };
  const changeImp = (txt) => {
    console.log("imp: ", imp);
    setImp(txt);
    console.log("txt: ", txt);
    console.log("imp: ", imp);
  };
  return (
    <View style={styles.container}>
      <Button
        title="Go TO Fav"
        onPress={() => {
          navigation.navigate("Fav");
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
