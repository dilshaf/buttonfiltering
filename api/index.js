import { base_URL } from "./base"
import {area, } from "./endpoint"

export const getCategories =() =>{

    // call api and return
    let response = fetch(`${base_URL}/${area}`)
 
    return response;

}


export const searchCategories =(item) =>{

    // call api and return
    let response = fetch(`${base_URL}/search.php?s=${item}`)
 
    return response;

}