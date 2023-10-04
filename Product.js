import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

function Product() { //first

    const {id}=useParams();//catch id
    const[product,setProduct]=useState({})
   const getProduct= async()=>{
     let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     console.log(response ,"response");
     setProduct(response.data.meals[0])
   }

    useEffect(()=>{
        getProduct(id)
        return()=>{
            // third

        }
        
    },[])
  return ( //second
    <div>
       <div>{product.strMeal}</div> 
       <div><img src={product.strMealThumb}></img></div>
       <div>{product.strInstructions}</div>
        {/* <Link to={-1}>
            <button>Go back</button>
        </Link> */}
        {/* {
            product.strArea
        } */}
    </div>
  )
}

export default Product