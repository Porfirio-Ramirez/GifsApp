import { CustomHeader } from './shared/components/CustomHeader'
import { BusquedaComponent } from './shared/components/BusquedaComponent'
import { BusquedaPrevia } from './gifs/components/PreviousSearhes'
import { GifsList } from './gifs/components/GifsList'
import { useState } from 'react'
import { GetGifByQuery } from './Actions/Get-Gif'
import type { Gif } from './gifs/interfaces/gif-.interface'
export const GifsApp = () => {
    const [previousterms, SetPreviousterms] = useState<string[]>([])
    const [gif, setgif] = useState<Gif[]>([])
    const handleTermClick = (term: string) => {
        console.log({term})
    }

    const handleSearch = async (query: string) =>{
        query = query.trim().toLowerCase()

        if(query.length === 0) return

        if(previousterms.includes(query)) return

        SetPreviousterms([query, ...previousterms].slice(0,8))

        const gifs = await GetGifByQuery(query);

        setgif(gifs);
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
    <GifsList gif={gif}/>
   
     
    </>
  )
}

