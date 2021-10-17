import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { useState, useEffect } from "react";

import { vibrate } from "./utils";
import Contador from "./componentes/Contador.jsx";
import Temperatura from "./componentes/Temperatura";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Click para hacer vibrar el dispositivo!</Text>
      <Button title="Vibracion" onPress={vibrate} />
      <Temperatura />
      <Contador />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
