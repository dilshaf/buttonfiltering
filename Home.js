import React, { useEffect, useState } from 'react'
import CardUI from './Card'


function Home() {

  const [categories,setCategories] = useState([])
  const [categoriesList,setCategoriesList] = useState([])





  const getAllCategories = async()=>{
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")

    let toJSON = await response.json()

    setCategories(toJSON?.categories)

  } 


  useEffect(() => {
    getAllCategories()
  
    
  }, [])

  const handleclick = async(para)=>{

   
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${para}`)

    let toJSON = await response.json()

    // console.log(toJSON)

    setCategoriesList(toJSON?.meals)

  }
  


  return (
<div className="">
    <div className="" style={{display:"flex"}}>
      {
        categories?.map((item,index)=>{
          return(
            <div className="" key={index}>
              
            <button onClick={()=>handleclick(item.strCategory)}>{item.strCategory}</button>
            </div>
          )
        })
      }
</div>

<div className="">

      {
        categoriesList?.map((item)=>{
          console.log(item)
          return(
            <>
              <CardUI data={item}/>
            </>
          )
        })
      }

        </div>

</div>
  



  
  )
}

export default Home