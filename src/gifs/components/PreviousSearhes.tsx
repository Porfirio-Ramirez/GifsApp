import type { FC } from "react";

interface props {
  buscar: string[];
  onLabelClicked: (term: string) => void;
}

export const BusquedaPrevia: FC<props> = ({buscar, onLabelClicked}) => {
  return (
    <div className='previous-searches'>
           <h2>Busquedas previas</h2>
           <ul className='previous-searches-list'>
              {buscar.map((temp) => 
              <li key={temp} onClick={() => onLabelClicked(temp)}>{temp}</li>
            )}
           </ul>
       </div>
  )
}


