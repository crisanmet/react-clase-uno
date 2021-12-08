import { Tarjeta, BlogPost } from "./tarea/Tarea1.js";

// const misDatos = {
//   nombre: "Cristian Sancricca",
//   img: "https://via.placeholder.com/150",
//   titulo: "Programador en cosas",
// };

ReactDOM.render(
  <React.Fragment>
    <Tarjeta
      nombre="Cristian Sancricca"
      img="https://via.placeholder.com/150"
      titulo="Programador en cosas"
    />
    <BlogPost
      titulo="Ardillas"
      parrafos={`Hoy vi una ardilla.
     La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
     Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
      autor={{
        nombre: "Cristian Sancricca",
        img: "https://via.placeholder.com/150",
        titulo: "Programador en cosas",
      }}
    />
  </React.Fragment>,

  document.getElementById("react-app")
);
