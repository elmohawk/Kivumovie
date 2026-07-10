import {
TMDB_API_KEY
} from "./config.js";

export async function getTrending(){

const response = await fetch(

`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`

);

const data = await response.json();

return data.results;

}
