import {months} from "./constants.js";
const getDate =()=>{
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const updatedMonth = months[month-1]
    return day + " " + updatedMonth;
}

export {getDate}

export const trimString =(text, max)=>{
    if(text.length < max){return text;}else{
        return text.slice(0,max) + "...";
    }
        
}

