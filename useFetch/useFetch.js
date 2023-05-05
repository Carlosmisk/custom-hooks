

import { useEffect, useState } from "react";


//export const useFetch = async(id) => {
    // const url = `https://api.breakingbadquotes.xyz/v1/quotes/${id}`;
    // const resp = await fetch(url);
    // const json = await resp.json();
    // const {quote, author} = json[0];

    
    // return {
    //     quote,
    //     author
    // }

//     return ;
// }

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null

    });

    const getUrl = async()=>{

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
      getUrl();

    }, [url])
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
