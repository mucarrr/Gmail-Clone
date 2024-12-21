
import {showModal} from "./ui.js";
import {getDate } from "./helper.js";
import { renderMails } from "./ui.js";

const hamburgerMenu = document.querySelector(".hamburger-menu")
const navigation = document.querySelector("nav")
const createMail = document.querySelector(".create")
const modal = document.querySelector(".modal-wrapper");
const closeModal = document.querySelector(".bi-x-lg")
const form = document.querySelector("#create-mail-form");
const mailArea = document.querySelector(".mails-area")

const stringMailData = localStorage.getItem("data")
const mailData = JSON.parse(stringMailData) || [];

document.addEventListener("DOMContentLoaded",()=>{
    renderMails(mailArea, mailData);
})


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

const sendMail =(e)=>{
e.preventDefault();
const receiver = e.target[0].value;
const title = e.target[1].value;
const message = e.target[2].value;


if(!receiver || !title || !message){
    Toastify({
        text: "Please fill out the form.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FDCC00",
          borderRadius: "10px",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    return;
}else{
    const newMail = {
        id: new Date().getTime(),
        sender: "merve",
        receiver,
        title,
        message,
        starred: false,
        date: getDate()
    }
    mailData.unshift(newMail);
    const stringData = JSON.stringify(mailData);
    localStorage.setItem("data", stringData);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";

    showModal(modal, false);
    Toastify({
        text: "Form submitted successfully.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#24BB33",
          borderRadius: "10px",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      
    renderMails(mailArea, mailData);
}
}
const updateMail =(e)=>{
    if(e.target.classList.contains("bi-trash-fill")){
       /*  const mail = e.target.parentElement.parentElement.parentElement; */
       const mail = e.target.closest(".mail")
       const mailId = mail.dataset.id
       const filtered = mailData.filter((mail)=>mail.id != mailId )
       const stringData = JSON.stringify(filtered)
       localStorage.removeItem("data")
       localStorage.setItem("data", stringData);
       mail.remove();
      
}
}

form.addEventListener("submit", sendMail);
mailArea.addEventListener("click", updateMail);



