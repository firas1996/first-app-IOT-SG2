import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ContactItem = ({ name, isFav, id, updateItem }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.txt}>{name}</Text>
      <TouchableOpacity
        onPress={() => {
          updateItem(id);
        }}
      >
        <MaterialIcons
          name={isFav ? "favorite" : "favorite-border"}
          size={28}
          color={isFav ? "red" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  item: {
    height: 48,
    width: "90%",
    borderRadius: 12,
    backgroundColor: "blue",
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    alignSelf: "center",
    flexDirection: "row",
  },
  txt: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
});
