import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import FavStore from "../store/FavContext";
import ContactItem from "../components/ContactItem";

const Fav = () => {
  const { FavList } = useContext(FavStore);
  return (
    <View style={styles.v2}>
      <FlatList
        style={{
          width: "100%",
        }}
        data={FavList}
        renderItem={({ item }) => (
          <ContactItem id={item.id} name={item.name} isFav={item.isFav} />
        )}
      />
    </View>
  );
};

export default Fav;

const styles = StyleSheet.create({
  v2: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
});
