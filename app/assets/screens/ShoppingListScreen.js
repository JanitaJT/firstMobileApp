import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function ShoppingListScreen() {
  const [items, setitems] = useState("");
  const [totalItems, setTotalItems] = useState([]);

  const AddItem = () => {
    setTotalItems([...totalItems, items]);
  };
  const ClearItems = () => {
    setTotalItems([]);
  };
  return (
    <View style={styles.container}>
      <Text>Add to shoppinglist:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter item"
        onChangeText={(items) => setitems(items)}
        value={items.toString()}
      ></TextInput>

      <View style={styles.buttons}>
        <Button title="Add" onPress={AddItem}></Button>
        <Button title="Clear" onPress={ClearItems}></Button>
      </View>
      <View
        style={{
          alignItems: "center",
          height: 100,
        }}
      >
        <FlatList
          data={totalItems}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    borderColor: "grey",
    borderWidth: 1,
    textAlign: "center",
    margin: 5,
    height: 40,
  },
  buttons: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly",
  },
});
