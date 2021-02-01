import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';


function App() {

   // creamos el usestate
   const [busqueda, setbusqueda] = useState({
    ciudad:'',
    pais:''
    });

    const {ciudad,pais}= busqueda;

    const [consulta,setConsulta]=useState(false);

    const [resultado,setResultado]= useState({});

    const [error, setError]= useState(false);

    useEffect(()=>{
      
      const consultarApi= async()=>{

          if(consulta){
            const appId= '71c1ca9a555560974ee88b418a2c4562';
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            setResultado(resultado);
            setConsulta(false);

              if(resultado.cod === "404"){
                setError(true);
              }else{
                setError(false);
              }

          }
        

      }

      consultarApi();
      // para evitar errores de deendencias 
      // eslint-disable-next-line
    },[consulta]);

    let componente;
    if(error){
      componente = <Error 
                    mensaje ="no hay resultados..."
                  />
    } else{
      componente = <Clima 
                    resultado={resultado}
                  /> 
    }


  return (
    <Fragment>
      <Header
        titulo='El clima'
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario 
              busqueda={busqueda}
              setbusqueda={setbusqueda}
              setConsulta={setConsulta}
              />
            </div>
            <div className='col m6 s12'>
              {componente}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
