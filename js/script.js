import "./slider.js";
import "./hero.js";
import { supabase } from "./supabase.js";

const trending =
document.getElementById("trendingMovies");

const recent =
document.getElementById("recentMovies");

const recommended =
document.getElementById("recommendedMovies");

async function loadTrending(){

const { data,error } =
await supabase

.from("movies")

.select("*")

.eq("featured",true)

.limit(12);

if(error){

console.log(error);

return;

}

trending.innerHTML="";

data.forEach(movie=>{

trending.innerHTML+=movieCard(movie);

});

}

async function loadRecent(){

const { data } =
await supabase

.from("movies")

.select("*")

.order("created_at",{
ascending:false
})

.limit(12);

recent.innerHTML="";

data.forEach(movie=>{

recent.innerHTML+=movieCard(movie);

});

}

async function loadRecommended(){

const { data } =
await supabase

.from("movies")

.select("*")

.order("rating",{
ascending:false
})

.limit(12);

recommended.innerHTML="";

data.forEach(movie=>{

recommended.innerHTML+=movieCard(movie);

});

}

function movieCard(movie){

return `

<div
class="movie-card"
onclick="location.href='movie.html?id=${movie.id}'">

<img
src="${movie.poster}"
loading="lazy">

<div class="movie-overlay">

<div class="movie-buttons">

<button title="Play">

<i class="fas fa-play"></i>

</button>

<button title="My List">

<i class="fas fa-plus"></i>

</button>

<button title="Like">

<i class="fas fa-heart"></i>

</button>

</div>

<div class="movie-details">

<h3>${movie.title}</h3>

<div class="movie-meta">

<span>

⭐ ${movie.rating}

</span>

<span>

${movie.year}

</span>

</div>

<div class="quality">

4K

</div>

</div>

</div>

</div>

`;

}

loadTrending();

loadRecent();

loadRecommended();
