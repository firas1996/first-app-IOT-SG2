import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ContactItem = ({ name }) => {
  // const {name}=props
  return (
    <View style={styles.item}>
      <Text style={styles.txt}>{name}</Text>
      <TouchableOpacity>
        <MaterialIcons name="favorite-border" size={28} color="yellow" />
      </TouchableOpacity>

      {/* <MaterialIcons name="favorite" size={28} color="yellow" /> */}
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
