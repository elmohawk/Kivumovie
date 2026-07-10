export async function loadLoader(){

const response=await fetch("components/loader.html");

const html=await response.text();

document.body.insertAdjacentHTML(

"afterbegin",

html

);

}
