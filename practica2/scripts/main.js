/*let links= document.querySelectorAll("a");
//DOM
//querySelector / querySelectorAll-
console.log(links);

links.forEach(function(link) {
  console.log(link);
});
*/
let celdas= document.querySelectorAll("td");

celdas.forEach(function(td) {
  td.addEventListener('click',function(){

    console.log(this);
    })
});
let links=document.querySelectorAll("close");
 links.forEach(function(link) {
   link.addEventListener("click",function(ev){
     ev.preventDefault();

     let content= document.querySelectorAll(".content");
//quitar las clase de animacion que ya tiene
     content.classList.remove("jackInTheBox");
     content.classList.remove("animated");
// agregar clases para animar su salida
     content.classList.add("fadeOutUp");
     content.classList.add("animated");
     setTimeout(function(){
     //setIntervla
     location.href="/practica2"},10000);
     return false;

   });

 });
let iconos=document.querySelectorAll("i");
iconos.forEach(function(icono){
      icono.classList.add("fa-smile")
});
