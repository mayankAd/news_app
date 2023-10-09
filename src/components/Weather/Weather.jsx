import React, { useEffect, useState } from 'react'




const Weather = () => {

  const[data, setData] = useState({})
  const[city, setCity] = useState("Delhi");
  const[temp, setTemp] = useState("");
  const[humidity, setHumidity] = useState("");
  const[feelsLike, setFeelsLike] = useState("");
  const[windSpeed, setWindSpeed] = useState("");

  useEffect(()=>{
    setCity("delhi")
    changeData("delhi");
  },[])

  async function changeData(place){
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${place}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '67d8c2caf7msh6b1ee4b54173e91p150b0fjsn8756e5f29d12',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setData(result)
  } catch (error) {
    console.error(error);
  }
  setTemp(data.temp)
    setHumidity(data.humidity)
    setFeelsLike(data.feels_like)
    setWindSpeed(data.wind_speed)
  }



  


  return (
    <div className='bg-slate-500 w-[200px] h-[100%] md:w-[400px] fixed flex flex-col items-center border-2 border-black'>
      <div className='bg-black w-[100%] flex justify-center h-[200px] items-center'>
      <div className='w-[30%]'>
        <img src="News.png" alt="" />
      </div>
      </div>
      <div className='h-[100%] flex flex-col w-[100%]'>
        
      <div className='flex flex-col border-black border-t-2 border-b-2 h-[400px] bg-blue-100 w-[100%] pl-10 pt-12 text-gray font-bold text-3xl gap-8'>
      <h1 className='text-black rounded-lg pl-[100px] font-bold text-[40px] border-2  pb-4 mr-12 bg-white'>{city}</h1>
          <h3 className='flex pt-4'>Temperature : <p className='text-blue-700'>{temp}</p></h3>
          <h3 className='flex'>Feels like : <p className='text-blue-700'>{feelsLike}</p></h3>
          <h3 className='flex'>Humidity : <p className='text-blue-700'>{humidity}</p></h3>
          <h3 className='flex'>Wind speed : <p className='text-blue-700'>{windSpeed}</p></h3>
      </div>
      <div className='flex flex-col items-center gap-10 '>
        <p className='text-xl text-white pt-10'>Search your city</p>
        <div className='flex gap-3'>
        <input className='pl-2 h-10 border-black border-2 ' type="text" name="" id="" placeholder='eg:delhi' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
        <button className='border-black bg-blue-400 border-2 text-white font-bold h-10 w-20 hover:bg-blue-800' onClick={()=>{changeData(city)}}>search</button>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Weather