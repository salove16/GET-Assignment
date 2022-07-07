import { useEffect } from "react"
import { useState } from "react"
import {SearchInput} from "./search"
import BasicModal from "./DetailsUserCard"
import "./main.css"
import { useRef } from "react"

export const Display=()=>{
const [Data,setData]=useState([])
const [singleData,setSingleData]=useState({})
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const pageRef=useRef(1)
useEffect(()=>{
    getData()
    window.addEventListener("scroll", handleScroll);
},[])
const getData=async(text)=>{
    try {
        let url=`https://rickandmortyapi.com/api/character/?page=${1}`
        if(text){
           let page=1
                pageRef.current = page
            
            
           url=`https://rickandmortyapi.com/api/character/?name=${text}&page=${pageRef.current}`
        }
        let res=await fetch(url);
        
        let data=await res.json()
// console.log(data.results,"*****",data)
pageRef.current = pageRef.current + 1
if(data.results!=undefined){
    console.log(data.results,"*****",Data)
    // let all=[...Data,...data.results]
    // console.log(all)
  
 return setData([...Data,...data.results])
}
setData([])
    } catch (error) {
      console.log(error)  
    }
}

const handleScroll = () => {
    let userScrollHeight = Math.floor(window.innerHeight + window.scrollY);
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      // console.log(userScrollHeight, windowBottomHeight, "hei");

      getData();
    }
  };

    return (
        <div>
            <SearchInput prop={getData}></SearchInput>
          {/* {singleData==null?null:<BasicModal open={open} props={singleData} handleClose={handleClose}></BasicModal>}   */}
          <BasicModal open={open} props={singleData} handleClose={handleClose}></BasicModal>

{
    Data.map((e)=>
    <div key={e.id} className="display_flex display_table" onClick={()=>{
        handleOpen()
        setSingleData(e)
    }}>
        <div className="display_flex start">
            <div className="display_image">
                <img src={e.image} alt="" />
            </div>
            <p>{e.name}</p>
        </div>
        <div className="display_flex end">
            <div className={(e.status&&e.species=="Humanoid")||(e.status=="Alive")?"display_status_green":"display_status_grey"}></div>
            <p>{e.status} - {e.species}</p>
        </div>
    </div>
    )

}
        </div>
    )
}