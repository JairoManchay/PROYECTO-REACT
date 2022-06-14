import React,{useState, Fragment} from "react";

const Lista = () =>{

    const [arrayNumero, setarrayNumero] = useState([1,2,3,4,5]);
    const [numero, setNumero] = useState(5);

    const agregarElementos = ()=>{

        setNumero(numero+1)
        console.log('click')
        setarrayNumero([
            ...arrayNumero,
            numero
        ])
    }
   /*
    const arrayUno =['Chile','Argentina']
    const arrayDos =['Perú','México']

    const Unidos = [...arrayUno,...arrayDos]
    console.log(Unidos)*/
    return(
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElementos}>Agregar</button>
            {
                arrayNumero.map((item, index) => 
                    <p key={index}>{item} - {index}</p>
                )
            }
        </Fragment>
    );
}
export default Lista;