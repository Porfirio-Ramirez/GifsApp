import type { FC } from "react"


interface props{
    titulo: string,
    descripcion: string
}
export const CustomHeader: FC<props> = ({titulo, descripcion}) => {
  return (
       <div className='content-center'>
        <h1>{titulo}</h1>
         {descripcion && <p>{descripcion}</p>}
    </div>
  )
}
