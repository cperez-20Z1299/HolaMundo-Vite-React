//Hooks (el use significa que es un hook)
import { useState } from "react"

export const Contador = () =>{

    //1. Aumentar el valor en 1
    //2. Disminuir el valor en 1
    //3. Resetear a 0

    const valor = 400;

        //contador = valor actual  y setContador = asignar un nuevo valor
                                    //setContador renderiza de nuevo
    const [contador, setContador] = useState(valor);

    const aumentarValor = ()=>{

        //console.log(event);
        //setContador(contador +1) //Forma 1

        setContador((c) => c +1); //Forma 2
    }

    const disminuirValor = ()=> setContador( (c) => c -1 );

    const resetearValor = ()=> setContador(valor);

    return(

        //Usamos div para poder usar mas etiquetas 
        //Podemos usar los fragmentos <> </> en lugar de div para las etiquetas

        <div>
            <h1>Contando....</h1>
            <h3> {contador} </h3>

            <button onClick={aumentarValor}>
                Aumentar +1
            </button>
            <button onClick={disminuirValor}>
                Disminuir -1
            </button>
            <button onClick={resetearValor}>
                Resetear
            </button>
        </div>
    )
}