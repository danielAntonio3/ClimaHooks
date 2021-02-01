import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    //extraemos lo que necesitamos de la api

    const {name,main}= resultado;

    if(!name) return null;

    const kelivin=273.15;


    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat( main.temp - kelivin,10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura maxima: 
                    {parseFloat( main.temp_max - kelivin,10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura minima: 
                    {parseFloat( main.temp_min - kelivin,10).toFixed(2)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}
 
Clima.propTypes={

    resultado: PropTypes.object.isRequired

}
export default Clima;
