import React , { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
    
    const { data:images , cargando } = useFetchGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeInUpBig'> { category } </h3>

            {  cargando  &&  'Cargando...' } 
            <div className="card-grid">
                
            
                {
                    images.map( img => ( 
                        <GifGridItem 
                        key={ img.id } 
                        { ...img } 
                        /> ) 
                        )
                }
            </div>  
            

            
        </>
    )
}
