import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ContactItem = ({ name }) => {
  // const {name}=props
  return (
    <View style={styles.item}>
      <Text style={styles.txt}>{name}</Text>
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
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 8,
    alignSelf: "center",
  },
  txt: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
});
