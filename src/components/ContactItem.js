import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ContactItem = () => {
  return (
    <View style={styles.item}>
      <Text>ContactItem</Text>
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
  },
});
