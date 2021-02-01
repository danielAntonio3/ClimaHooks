import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Formaulario = ({busqueda,setbusqueda,setConsulta}) => {

    const [error,setError] = useState(false);

    //extraemos los valores
    const {ciudad,pais} = busqueda;

    //fucion que guarda los datos del formulario en el usestate
    const handleChange = e=>{
        setbusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

    };

    const handleSubmit = e => {
        e.preventDefault();


        //validar formulario
        if(ciudad.trim() === '' || pais.trim() ===''){
            setError(true);
            return ;
        }
        //se actualiza el error
        setError(false);

        //este funcion es para ejecutar la consulta de la api en app
        setConsulta(true);
    };


    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ?<p className="red darkem-4 error">Todos los campos son obligatorios</p> :null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value=''>--Selecciona un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País:</label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>


     );
}
 
Formaulario.prototype={
    busqueda: PropTypes.object.isRequired,
    setbusqueda: PropTypes.func.isRequired,
    setConsulta: PropTypes.func.isRequired
}

export default Formaulario;