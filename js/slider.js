const buttons = document.querySelectorAll(".slider-btn");

buttons.forEach(button=>{

button.onclick=()=>{

const row=document.getElementById(
button.dataset.target
);

const amount=350;

if(button.classList.contains("left")){

row.scrollBy({

left:-amount,

behavior:"smooth"

});

}else{

row.scrollBy({

left:amount,

behavior:"smooth"

});

}

};

});
