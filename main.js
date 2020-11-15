const share_icon = document.querySelector(".share-icon-circle");
const active = document.querySelector("#active");
const svg = document.querySelector(".share-icon")
const parent = document.querySelector(".avatar-background");

parent.addEventListener('click', transition);
function transition(ev){
     if (ev.target ==share_icon.firstElementChild || ev.target ==share_icon || ev.target==share_icon.firstElementChild.firstElementChild){
         console.log(ev.target);
         active.classList.toggle("share-links"); 
         console.log(share_icon);
         share_icon.classList.toggle("select");
         svg.classList.toggle("arrow-select");
     }
}
