import { supabase } from "./supabase.js";

const hero = document.querySelector(".hero");

async function loadHero(){

const { data,error } = await supabase

.from("movies")

.select("*")

.eq("featured",true)

.limit(1)

.single();

if(error){

console.error(error);

return;

}

document.getElementById("heroTitle").textContent =
data.title;

document.getElementById("heroDescription").textContent =
data.description;

document.getElementById("heroRating").textContent =
`⭐ ${data.rating}`;

document.getElementById("heroYear").textContent =
data.year;

document.getElementById("heroGenre").textContent =
data.genre;

hero.style.backgroundImage =
`url(${data.backdrop})`;

document.getElementById("playMovie").onclick=()=>{

location.href=
`movie.html?id=${data.id}`;

};

document.getElementById("movieInfo").onclick=()=>{

location.href=
`movie.html?id=${data.id}`;

};

}

loadHero();
