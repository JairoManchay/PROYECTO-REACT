import React, {useState, Fragment} from 'react';

const Jsk = () => {
    
    //const saludo = 'Hola Jsk';
    const temperatura =21;
    return ( 
        // Envolver todo dentro de un div, para que te permita usar el 
        // return con mas de una etiqueta
        <Fragment>
        <h3>Calor o Frio?</h3>
        <h4>
            {
                temperatura>20?'Calor':'Frio'
            }
        </h4>
    </Fragment>
    );

}
 
export default Jsk;