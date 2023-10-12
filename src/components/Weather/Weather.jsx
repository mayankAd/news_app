import React, { useEffect, useState } from "react";

const Weather = () => {
  const [cityName, setCityName] = useState("Delhi");
  const [data, setData] = useState({});
  const [city, setCity] = useState("Delhi");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  useEffect(() => {
    changeData(city);
  }, []);

  useEffect(() => {
    setTemp(data.temp);
    setHumidity(data.humidity);
    setFeelsLike(data.feels_like);
    setWindSpeed(data.wind_speed);
    setCityName(city);
  }, [data]);

  async function changeData(place) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${place}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `67d8c2caf7msh6b1ee4b54173e91p150b0fjsn8756e5f29d12`,
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-slate-500 w-[200px] h-[100vh] md:w-[350px] fixed flex flex-col items-center border-2 border-gray-700 border-t-0">
      <div className="bg-gray-700 w-[100%] flex justify-center h-[100px] items-center">
        <div className="h-[100px] w-[100px] border border-black">
          <img className="w-[100%] h-[100%] object-cover" src="News.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col w-[100%] h-[100%] ">
        <div className="flex flex-col border-black border-b-2 bg-slate-400 w-[100%] sm:pl-6 pt-12 pb-10 text-gray font-bold text-3xl gap-2">
          <div className="flex pl-6">
            <h1 className="flex justify-center text-black rounded-lg font-bold text-[20px] border-2 bg-white ps-4 pe-4 md:text-[25px]">
              {cityName}
            </h1>
          </div>
          <div className="flex p-5 gap-1 md:gap-10 border border-white w-[180px] md:w-[300px] rounded-lg bg-blue-300 shadow-lg shadow-black">
            <div className="flex flex-col gap-3">
              <h3 className="flex font-medium pt-4 text-[20px] md:text-[25px]">
                Temperature{" "}
                
              </h3>
              <hr />
              <h3 className="flex font-medium text-[20px] md:text-[25px]">
                Feels like{" "}
              </h3>
              <hr />
              <h3 className="flex font-medium text-[20px] md:text-[25px]">
                Humidity 
              </h3>
              <hr />
              <h3 className="flex font-medium text-[20px] md:text-[25px]">
                Wind speed 
              </h3>
            </div>
            <div className=" font-medium pt-4 text-[20px] md:text-[25px] flex flex-col gap-6">
              <p className="text-white">{temp}°</p>
              <p className="text-white">{feelsLike}°</p>

              <p className="text-white">{humidity}</p>
              <p className="text-white">{windSpeed}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 ">
          <p className="text-xl text-white pt-10">Search your city</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <input
              className="pl-2 h-10 border-black border rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="eg:delhi"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <button
              className="border-black bg-blue-400 border rounded-lg text-white font-bold h-10 w-20 hover:bg-blue-800"
              onClick={() => {
                changeData(city);
              }}
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
