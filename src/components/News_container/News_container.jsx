import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import News_card from '../News_card/News_card'
import { NewsContext } from '../../App';

const News_container = () => {

  const data = useContext(NewsContext)



  const [news, setNews] = useState();


  const API_KEY = "pub_30909bd462afa673603ff5fe711bde08ce975";
  const url = "https://newsdata.io/api/1/news?";

  useEffect(()=>{
    fetchNews("India")
  },[])

  useEffect(()=>{
    fetchNews(data.search)
  },[data.search])

  const fetchNews= async(query)=>{
    const res = await fetch(`${url}apiKey=${API_KEY}&q=${query}`)
    const data = await res.json();
    const filteredData = data.results.filter(item=>{
      return item.image_url!= null
    })
    setNews(filteredData);
    
  }

  
  




  return (
    <div className=' pt-[200px] pl-20 flex flex-wrap w-[100%] h-[100%] gap-10'>
        {
          
          news?.map((dat)=>{
            {
            return(
              <div key={dat.title}>
              <News_card imglink = {dat.image_url} title={dat.title} description = {dat.description} url = {dat.link}/>
              </div>
            )
            }
          })
        }
    </div>
  )
}

export default News_container