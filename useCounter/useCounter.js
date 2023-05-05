
import { useState } from "react";


export const useCounter = (valorIni = 10)=> {

    const [counter, setCounter] = useState(valorIni);

    const sumar = ( value = 1)=> {
        //console.log(value);
        setCounter((current) => current + value);
    }

    const restar = ( value = 1)=> {
        //if (counter < 1) return
        setCounter((current) => current - value);

    }

    const reset = ()=> {
        setCounter(valorIni);

    }

    return {
        counter,
        sumar,
        restar,
        reset
    }
}





// import PropTypes from 'prop-types';
// import { useState } from 'react';

// export const useCounter = (valorIni) => {
  
//   const [counter, setCounter] = useState(valorIni);
  
  
//   return (
//     <>

//     </>
//   )

// }

// useCounter.propTypes = {
//     valorIni: PropTypes.number.isRequired
// };