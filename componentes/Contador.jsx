import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Contador = () => {
  //hooks van aca
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  function sumarTres() {
    setContador(contador + 3);
  }

  const restarDos = function restarDos() {
    setContador(contador - 2);
  };

  return (
    <View style={styles.container}>
      <Text> {contador} </Text>
      <Button title="Incrementar" onPress={incrementar}></Button>
      <Button title="Decrementar" onPress={decrementar}></Button>
      <Button title="x3" onPress={sumarTres}></Button>
      <Button title="restar2" onPress={restarDos}></Button>
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

export default Contador;
