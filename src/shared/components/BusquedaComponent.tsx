import { useEffect, useState,  type FC, type KeyboardEvent } from "react";

interface props{
    buscador: string;
    placeholders?: string;
    onSearch: (query: string) => void

}

export const BusquedaComponent: FC<props> = ({buscador, placeholders = 'Buscar', onSearch} ) => {
    const [query, setquery] = useState('')
    
    const handleSearch = () => {
        onSearch(query)
        setquery('')
    }

    const handleDown = (event:  KeyboardEvent<HTMLInputElement>) => {
      if(event.key === 'Enter'){
        handleSearch()
      }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onSearch(query)
        }, 700 );

        return() => {
            clearTimeout(timeoutId)
        }
    }),[query, onSearch]
  return (
     <div className='search-container'>
        <input 
        type="text" 
        placeholder={placeholders}
        value={query}
        onChange={(event) => setquery(event.target.value)}
        onKeyDown={handleDown} 
        />
        <button onClick={handleSearch}>{buscador}</button>
    </div>
  )
}
