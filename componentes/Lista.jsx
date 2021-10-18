import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Lista = () => {
  const [arrayNumero, setNumero] = useState([1, 2, 3, 4, 5]);

  const agregarElemento = () => {
    console.log("CLICKKK");
    setNumero([...arrayNumero, 1]);
  };

  return (
    <View style={styles.container}>
      <Button title="Agregar" onPress={agregarElemento}></Button>
      {arrayNumero.map((num, index) => (
        <Text key={index}>
          Numero:{num} - Posicion en el array {index}
        </Text>
      ))}
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
export default Lista;
