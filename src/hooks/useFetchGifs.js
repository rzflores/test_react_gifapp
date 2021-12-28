import { useState , useEffect} from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs= ( category ) =>  {
    const [state, setstate] = useState({ data: [] , cargando:true  })

    useEffect( () => {
        getGifs( category)
        .then( imgs =>  {
            setstate({
                data: imgs,
                cargando : false
            })
        })
    },[category] )

    return state;
}