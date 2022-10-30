import React from 'react'

const Contador = () => {
const [Contador,setContador]=React.useState(0)
const aumentar =()=>{setContador(Contador+1)}
const disminuir =()=>{setContador(Contador-1)}
  return (
    <div>
        <h2>Contador</h2>
        <h3>Contador: {Contador} </h3>
        <h4>{Contador%2 === 0 ? "Es par":"Es impar"}</h4>
        <button onClick={()=>aumentar()}>Aumentar</button>
        <button onClick={()=>disminuir()}>Disminuir</button>
    </div>
  )
}

export default Contador