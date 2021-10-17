import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Temperatura = () => {
  const temp = 26;
  const resultado = temp < 25 ? "frio" : "calor";

  return (
    <View>
      <Text> {resultado} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Temperatura;
