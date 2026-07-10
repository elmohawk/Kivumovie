import { loadLoader }

from "./modules/loader.js";

window.addEventListener("DOMContentLoaded",async()=>{

await loadLoader();

window.addEventListener("load",()=>{

setTimeout(()=>{

document

.getElementById("appLoader")

.classList.add("hide");

},1200);

});

});
