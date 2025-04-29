import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ContactItem from "../components/ContactItem";
import FavStore from "../store/FavContext";

const Home = () => {
  const navigation = useNavigation();
  const [imp, setImp] = useState("");
  const { DATA, addItem } = useContext(FavStore);
  const changeImp = (txt) => {
    console.log("imp: ", imp);
    setImp(txt);
    console.log("txt: ", txt);
    console.log("imp: ", imp);
  };
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={imp}
          onChangeText={changeImp}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            addItem(imp);
            setImp("");
          }}
        >
          <Text style={styles.btnTXT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <FlatList
          style={{
            width: "100%",
          }}
          data={DATA}
          renderItem={({ item }) => (
            <ContactItem id={item.id} name={item.name} isFav={item.isFav} />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    height: 48,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
    borderRadius: 12,
    borderColor: "gray",
  },
  v1: {
    width: "100%",
    flex: 1,
    marginTop: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  v2: {
    width: "100%",
    flex: 7,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "red",
    height: 35,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  btnTXT: { color: "white", fontSize: 18, fontWeight: "bold" },
});
