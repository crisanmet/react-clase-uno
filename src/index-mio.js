import { Tarjeta, BlogPost } from "./tarea/Tarea1.js";
import { MatchNombre, PasswordInput, ValidationInput } from "./tarea/Tarea2.js";
import { CheckboxList } from "./tarea/Tarea3.js";
import { CheckboxListWithState } from "./tarea/Tarea4.js";

//TAREA 1
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

//TAREA 2
ReactDOM.render(
  <React.Fragment>
    <MatchNombre nombre="Cristian" />
    <PasswordInput minLength="5" />
    <ValidationInput
      label="Password"
      validar={(value) => value.length >= 8}
      password="true"
    />
    <ValidationInput
      label="Input sin espacios:"
      validar={(value) => !value.match(" ")}
    />
    <ValidationInput
      label="dirección de email:"
      validar={(value) =>
        !value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      }
    />
  </React.Fragment>,
  document.getElementById("react-app")
);

//TAREA 3
ReactDOM.render(
  <CheckboxList
    items={{
      Uno: false,
      Dos: true,
      Tres: false,
    }}
  />,
  document.getElementById("react-app")
);

//TAREA 4
ReactDOM.render(
  <CheckboxListWithState
    items={{
      Cuatro: false,
      Cinco: true,
      Seis: false,
    }}
  />,
  document.getElementById("react-app")
);
