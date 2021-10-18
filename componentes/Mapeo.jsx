import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//array de frutas
const frutas = [
  { nombre: "Banana", color: "Amarillo" },
  { nombre: "Manzana", color: "Rojo" },
  { nombre: "Naranja", color: "Naranja" },
];

//lo mapeo
const frutas = frutas.map(function (fruta) {
  return fruta;
});

export default frutas;
