
let btn=document.getElementById("mode");


btn.onclick=function(){


document.body.classList.toggle("light");


if(btn.innerHTML=="🌙")

{

btn.innerHTML="☀️";

}

else{

btn.innerHTML="🌙";

}


}




let cards=document.querySelectorAll(".card");


cards.forEach(card=>{


card.onclick=function(){

alert(
card.querySelector("h2").innerHTML+
" added to cart"
);


}


});