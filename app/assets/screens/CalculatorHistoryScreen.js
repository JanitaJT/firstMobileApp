import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function CalculatorHistoryScreen() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("");
  const [data, setData] = useState([]);

  const Add = () => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let sum = n1 + n2;
    let strSum = num1 + " + " + num2 + " = " + sum;
    setTotal(sum);
    setData([...data, strSum]);
  };
  const Sub = () => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let sum = n1 - n2;
    let strSum = num1 + " - " + num2 + " = " + sum;
    setTotal(sum);
    setData([...data, strSum]);
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View style={styles.container}>
        <Text>Result: {total}</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter first number"
          keyboardType={"numeric"}
          onChangeText={(num1) => setNum1(num1)}
          value={num1}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Enter second number"
          keyboardType={"numeric"}
          onChangeText={(num2) => setNum2(num2)}
          value={num2}
        ></TextInput>
      </View>
      <View style={styles.buttons}>
        <Button title="+" onPress={Add}></Button>
        <Button title="-" onPress={Sub}></Button>
      </View>
      <View
        style={{
          alignItems: "center",
          height: 100,
        }}
      >
        <FlatList data={data} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
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
    width: "25%",
    justifyContent: "space-evenly",
  },
});
