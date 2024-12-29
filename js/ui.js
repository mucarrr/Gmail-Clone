import { trimString } from "./helper.js";

export function showModal (modal, willOpen){
    modal.style.display = willOpen? "block" : "none";
}

export const renderMails =(outlet, data)=>{
    outlet.innerHTML = data.map((mail)=>`
    <div class="mail" data-id="${mail.id}">
                <div class="left">
                    <input type="checkbox"/>
                    <i class="bi bi-star${mail.starred  ? "-fill" : ""}"></i>
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

export function renderCategories(outlet, data, selectedCategory){
    outlet.innerHTML =  "";
    data.forEach((category)=>{
        const categoryItem = document.createElement("a")
        categoryItem.dataset.name = category.title;
        categoryItem.className = selectedCategory === category.title && "active";
        categoryItem.innerHTML = `
        <i class="${category.class}"></i>
                    <span>${category.title}</span>
        `;
        outlet.appendChild(categoryItem);
    })
}