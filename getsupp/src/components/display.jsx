import { useEffect } from "react"
import { useState } from "react"
import {SearchInput} from "./search"

import "./main.css"

export const Display=()=>{
const [Data,setData]=useState([])
useEffect(()=>{
    getData()
},[])
const getData=async(text)=>{
    try {
        let url="https://rickandmortyapi.com/api/character/?page=1"
        if(text){
           url=`https://rickandmortyapi.com/api/character/?name=${text}&page=1`
        }
        let res=await fetch(url);
        
        let data=await res.json()
// console.log(data.results,"*****",data)
if(data.results!=undefined){
    console.log(data.results,"*****",data)
return setData(data.results)
}
setData([])
    } catch (error) {
      console.log(error)  
    }
}

    return (
        <div>
            <SearchInput prop={getData}></SearchInput>
{
    Data.map((e)=>
    <div key={e.id} className="display_flex display_table">
        <div className="display_flex">
            <div className="display_image">
                <img src={e.image} alt="" />
            </div>
            <p>{e.name}</p>
        </div>
        <div className="display_flex">
            <div className="display_status"></div>
            <p>{e.status} - {e.species}</p>
        </div>
    </div>
    )
}
        </div>
    )
}