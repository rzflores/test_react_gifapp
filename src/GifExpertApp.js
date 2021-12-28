import React , { useState} from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])
    
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory  setCategories={ setCategories } />
      <hr/>
      
      <ol>
      {
       categories.map( (item,index) => { 
           return (<GifGrid 
           key={ index }
           category={ item } 
           />
       )})
      }
      </ol>
    </div>
  )
}

export default GifExpertApp
