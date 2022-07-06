import { useState } from "react"
import "./main.css"

export const SearchInput=({prop})=>{
// const [search,setSearch]=useState()

const handleChange=(e)=>{
    console.log(e.target)
let {value}=e.target
prop(value)
}

return (
    <div>
        <input type="text" className="search_input" onChange={
          handleChange
        } />
       
    </div>
)

}