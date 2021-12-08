import React from "react";
import { Tarjeta } from "./tarea/Tarea1.js";

const misDatos = {
  nombre: "Cristian Sancricca",
  img: "https://via.placeholder.com/150",
  titulo: "Programador en cosas",
};

ReactDOM.render(
  <Tarjeta datos={misDatos} />,

  document.getElementById("react-app")
);
