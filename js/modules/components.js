export async function loadComponent(path,target){

const html=

await fetch(path)

.then(r=>r.text());

document.querySelector(target)

.innerHTML=html;

}
