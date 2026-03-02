import {mockGifs} from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { BusquedaComponent } from './shared/components/BusquedaComponent'
import { BusquedaPrevia } from './gifs/components/PreviousSearhes'
import { GifsList } from './gifs/components/GifsList'
import { useState } from 'react'

export const GifsApp = () => {
    const [previousterms, SetPreviousterms] = useState(['dragon ball z', 'Goku', 'Saitama', 'Elden ring'])
   
    const handleTermClick = (term: string) => {
        console.log({term})
    }

    const handleSearch = (query: string) =>{
        console.log(query)
    }
  return (
    <>
   {/* header */}
     <CustomHeader titulo='Buscador de gifs' descripcion='Descubre y comparte el gif perfecto'/>

    {/* search*/}
     <BusquedaComponent buscador='Buscar' placeholders='Busca tu gif deseado' onSearch={handleSearch}/>


    {/* Busquedas previas*/}
    <BusquedaPrevia buscar={previousterms} onLabelClicked = {handleTermClick}/>

    {/* gifs*/}
    <GifsList gif={mockGifs}/>
   
    </>
  )
}

//['Goku', 'Saitama', 'Elden ring']