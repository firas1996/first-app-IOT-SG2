import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ContactItem from "./src/components/ContactItem";

export default function App() {
  const DATA = [
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
    "aaaa",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput style={styles.input} placeholder="Title" />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTXT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <FlatList
          style={{
            width: "100%",
          }}
          data={DATA}
          renderItem={({ item }) => <ContactItem title={item} />}
        />
      </View>
    </View>
  );
}

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
