import React, { createContext, useContext, useState } from 'react'
import { NewsContext } from '../../App'








const Navbar = () => {

  const[val, setVal] = useState("ipl")

  const data = useContext(NewsContext)

  const changeSearch = ()=>{
    data.setSearch(val);
    console.log(val);
  }


  return (
    <div className='flex gap-4  justify-between h-[100px] bg-gray-700 text-white items-end md:ml-0 ml-10 pl-4 pb-2 md:pr-10 fixed md:w-[calc(100%-350px)] w-[100%]'>
        
        <div className='hidden md:flex'>
            <ul className='pl-6  flex md:flex-col  md:gap-1 gap-[5vw] lg:flex-row lg:gap-14 font-bold text-xl'>
                <li className='cursor-pointer hover:text-blue-400 ' onClick = {()=>{data.setSearch("Ipl")}}>IPL</li>
                <li className='cursor-pointer hover:text-blue-400 '  onClick = {()=>{data.setSearch("Finance")}}>Finance</li>
                <li className='cursor-pointer hover:text-blue-400 '  onClick = {()=>{data.setSearch("Politics")}}>Politics</li>
            </ul>
        </div>
        <div className='flex justify-center gap-6'>
            <input className='pl-2 rounded-xl text-gray-500 w-[100px] sm:w-[200px] md:w-[250px]' type="text" placeholder='e.g. Science' value={val}  onChange={(e)=>{setVal(e.target.value)}}/>
            <button className='border font-bold border-white p-2 bg-blue-500 text-white hover:bg-blue-800 hover:text-white rounded-xl' onClick={changeSearch}>Search</button>
        </div>
    </div>
  )
}

export default Navbar