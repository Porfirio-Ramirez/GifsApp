import type { FC } from "react"
import type { Gif } from "../../mock-data/gifs.mock"

interface props{
    gif: Gif[];
    
}


export const GifsList: FC<props> = ({gif}) => {
  return (
     <div className='gifs-container'>
        {gif.map((gifs) => (
            <div key={gifs.id} className='gif-card' >
                <img src={gifs.url} alt={gifs.title} />
                <p>
                    {gifs.width}x{gifs.height} (1.5mb)
                </p>
            </div>

        ))}
    </div>
  )
}
