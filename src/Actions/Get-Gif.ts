import { gifApi } from "../Api/Api_Gif";
import type { Gif } from "../gifs/interfaces/gif-.interface";
import type  { GiphyResponse } from "../gifs/interfaces/giphy.response";



export const GetGifByQuery = async (query: string): Promise<Gif[]> =>{
    const response = await gifApi<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 10,
        },
    });

    return response.data.data.map((gif) =>({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
      }));
}