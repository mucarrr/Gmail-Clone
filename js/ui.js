import { trimString } from "./helper.js";

export function showModal (modal, willOpen){
    modal.style.display = willOpen? "block" : "none";
}

export const renderMails =(outlet, data)=>{
    outlet.innerHTML = data.map((mail)=>`
    <div class="mail" data-id="${mail.id}">
                <div class="left">
                    <input type="checkbox"/>
                    <i class="bi bi-star"></i>
                    <span>${mail.receiver}</span>
                </div>
                <div class="right">
                    <p class="message-title">${mail.title}</p>
                    <p class="message-desc">${trimString(mail.message, 40)}</p>
                    <p class="message-date">${mail.date}</p>
                    <div class="delete">
                        <i class="bi bi-trash-fill"></i>
                    </div>
                </div>
            </div>
    
    `).join(" ");

}