import {showModal} from "./ui.js";

const hamburgerMenu = document.querySelector(".hamburger-menu")
const navigation = document.querySelector("nav")
const createMail = document.querySelector(".create")
const modal = document.querySelector(".modal-wrapper");
const closeModal = document.querySelector(".bi-x-lg")
const form = document.querySelector("form");


hamburgerMenu.addEventListener("click",
    ()=>{
        navigation.classList.toggle("hide")
    }
 )
createMail.addEventListener("click", ()=>showModal(modal, true));
closeModal.addEventListener("click", ()=>showModal(modal, false));

window.addEventListener("resize",(e)=>{
const width = e.target.innerWidth
    if(width < 1100){
        navigation.classList.add("hide");
    }else{
        navigation.classList.remove("hide");
    }
});

form.addEventListener("submit",(e)=>{
e.preventDefault();

});