import React from 'react'
import { categories } from "../utils/constants";


const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <div className='overflow-y-auto h-[95%] xs:h-[60px] xs:w-[90vw] xs:flex'>
      { 
        categories.map((category,index)=>{
            return(
                <button className='flex gap-5 p-5 rounded-full w-[200px] xs:gap-2' key={index}
                onClick={()=>setSelectedCategory(category.name)}
                style={{
                background: category.name === selectedCategory && "#ffffff4d",
                }}
                >
                <span>{category.icon}</span>
                <span style={{
                  opacity: category.name === selectedCategory ? '1' : '0.6'
                }}>{category.name}</span>
                
            </button>
            )
            
        }
            )
        }

    </div>
  )
}

export default SideBar
