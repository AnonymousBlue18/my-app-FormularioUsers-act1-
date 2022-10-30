import React, { useState } from "react";

const Formulario = () => {

  const [id, setId] = useState(0)
  const [cont, setCont] = useState(0)
  const [modoEdicion, setmodoEdicion] = useState(false)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [lista, setLista] = useState([])


  //Guardar Datos.
  const guardarDatos = (e) => {

    e.preventDefault();

    if (!nombre.trim()) {
      alert("Ingrese el nombre");
      return;
    }
    if (!apellido.trim()) {
      alert("Ingrese el apellido");
      return;
    }

    if (modoEdicion) {

      edicionFinal();

    } else {

      setLista([...lista, { id, nombre, apellido }])
      setId(id + 1)
      setCont(cont + 1)
      setNombre("")
      setApellido("")
      limpiarInput()

    }
  }

  //Limpiar Entradas.
  const limpiarInput = () => {

    const Nombre = document.getElementById('nombre');
    Nombre.value = "";
    const Apellido = document.getElementById('apellido');
    Apellido.value = "";

  };

  //Llenar entradas.
  const llenarInput = (elemento) => {

    const Nombre = document.getElementById('nombre');
    Nombre.value = elemento.nombre;
    const Apellido = document.getElementById('apellido');
    Apellido.value = elemento.apellido;

  };


  //Eliminar Dato.
  const eliminarDato = (indexElemento) => {


    let resultado = window.confirm("¿Estas seguro que deseas eliminar el usuario de la lista?");
    if (resultado === true) {
      setLista((prevState) =>
        prevState.filter((todo, index) => index !== indexElemento)
      );

    }

  };



  //Primera Edicion: activo el modo editar.
  const primeraEdicion = (elemento) => {

    setmodoEdicion(true)
    setId(elemento.id)
    setNombre(elemento.nombre)
    setApellido(elemento.apellido)
    llenarInput(elemento)

  }

  //Edicion Final: al estar activo del modo editar puedo hacer cambios y guardar.
  const edicionFinal = (e) => {

    e.preventDefault();
    const editado = lista.map(elemento => elemento.id === id ? { id, nombre, apellido } : elemento)
    setLista(editado)
    setmodoEdicion(false)
    setId(cont)
    setNombre("")
    setApellido("")
    limpiarInput()

  }

  return (

    <div className="container">

      <h2>Formulario De Usuarios</h2>

      <form className="" onSubmit={guardarDatos}>

        <input id="nombre"
          type="text"
          placeholder="Ingrese Nombre"
          className="form-control m-0 mb-2 input"
          onChange={(e) => setNombre(e.target.value)}

        />

        <input id="apellido"
          type="text"
          placeholder="Ingrese Apellido"
          className="form-control m-0 mb-2 input"
          onChange={(e) => setApellido(e.target.value)}

        />

        {
          modoEdicion ? (

            <button
              onClick={(e) => { edicionFinal(e) }}
              className="btn btn-danger center" type="submit">Editar</button>

          ) :
            (

              <div className='d-grid gap-2'>
                <button className="btn btn-success my-2 sm-2 center" type="submit">Agregar</button>
              </div>

            )
        }


      </form>

      <hr />


      <h3>Listado De Usuarios</h3>


      <ol className="card">
        {
          lista.map((elemento, index) => (
            <li key={index}>

              {elemento.nombre} {elemento.apellido}

              <button onClick={() => primeraEdicion(elemento)} className="btn btn-outline-info mx-2 my-1">Editar</button>
              <button onClick={() => eliminarDato(index)} className="btn btn-outline-danger">Eliminar</button>

            </li>
          ))
        }

      </ol>

    </div>
  )
}

export default Formulario;
