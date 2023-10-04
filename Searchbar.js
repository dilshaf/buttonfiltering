import React, { useEffect, useState } from 'react';
import { searchCategories } from './api';

function SearchBox({updateState}) {
    
    const [searchedValue,setSerachedValue] = useState('');
   


    const handleSearch = event=> {
        setSerachedValue(event.target.value)
        searchItem()
    }

    const searchItem =async ()=>{

        try {
            let response = await searchCategories(searchedValue)
            let toConvetJSON = await response?.json();
            updateState(toConvetJSON.meals)
        } catch (error) {
            
        }
    }

    console.log(searchedValue);

    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])
    

  return (
    <div className='search'>
        <input className='' onChange={handleSearch} placeholder='Search...'   />
    </div>
  )
}

export default SearchBox