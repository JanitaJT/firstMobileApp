import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalculatorHistoryScreen from "./app/assets/screens/CalculatorHistoryScreen";
import CalculatorScreen from "./app/assets/screens/CalculatorScreen";
import GuessingGameScreen from "./app/assets/screens/GuessingGameScreen";
import ShoppingListScreen from "./app/assets/screens/ShoppingListScreen";

export default function App() {
  return (
    // <CalculatorScreen />
    // <GuessingGameScreen />
    // <CalculatorHistoryScreen />
    <ShoppingListScreen />
  );
}
