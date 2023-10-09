import React, { createContext, useContext, useState } from 'react'
import { NewsContext } from '../../App'








const Navbar = () => {

  const[val, setVal] = useState("india")

  const data = useContext(NewsContext)

  const changeSearch = ()=>{
    data.setSearch(val);
    console.log(val);
  }


  return (
    <div className='flex justify-between h-[100px] bg-gray-700 text-white items-end pl-20 pb-2 pr-20 fixed w-[calc(100%-200px)] md:w-[calc(100%-400px)]'>
        
        <div>
            <ul className='pl-5 flex gap-[5vw] font-bold text-xl'>
                <li className='cursor-pointer hover:text-blue-400 ' onClick = {()=>{data.setSearch("Ipl")}}>IPL</li>
                <li className='cursor-pointer hover:text-blue-400 '  onClick = {()=>{data.setSearch("Finance")}}>Finance</li>
                <li className='cursor-pointer hover:text-blue-400 '  onClick = {()=>{data.setSearch("Politics")}}>Politics</li>
            </ul>
        </div>
        <div className='flex gap-6'>
            <input className='pl-2 rounded-xl text-gray-500' type="text" placeholder='e.g. Science' value={val}  onChange={(e)=>{setVal(e.target.value)}}/>
            <button className='border font-bold border-white p-2 bg-blue-500 text-white hover:bg-blue-800 hover:text-white rounded-xl' onClick={changeSearch}>Search</button>
        </div>
    </div>
  )
}

export default Navbar