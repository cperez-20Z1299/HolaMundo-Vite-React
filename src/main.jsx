import React from 'react';
import ReactDOM  from 'react-dom/client';

//Importaciones
import { HolaMundo } from './HolaMundo';
import { Contador } from './Contador';

ReactDOM.createRoot(document.getElementById('root')).render(

    //Componente hijo es lo que esta dentro
    <React.StrictMode>
        
    <Contador/>

    </React.StrictMode>

);

//Componente padre