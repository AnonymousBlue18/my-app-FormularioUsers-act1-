import React from 'react'

const Listas = () => {
    const EstadoI = ["item 1", "item 2", "item 3", "item 4"];
    const EstadoI_obj = [
        { id: 1, texto: 'Element 1' },
        { id: 2, texto: 'Element 2' },
        { id: 3, texto: 'Element 3' },
        { id: 4, texto: 'Element 4' }
    ];
    
    const [lista, setLista] = React.useState(EstadoI);
    const [listado, setListado] = React.useState(EstadoI_obj);

    const agregarElemento = () => {
        setListado([
            ...listado,//operador de propagacion
            { id: 4, texto: 'Element 5' }//elemento nuevo
        ])
    };


    return (
        <div>

            <h2>Listas</h2>

            <ul>
                {
                    lista.map((elemento, index) => (<li key={index}>{elemento}</li>))
                }
              
            </ul>
             
            <ul>
                {
                    listado.map((elemento) => (<li key={elemento.id}>{elemento.texto}</li>))
                }
              
                </ul>
               <button onClick={()=>agregarElemento()}>AgregarE</button>
        </div>
    )
}
  


export default Listas;