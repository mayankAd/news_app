import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import News_card from '../News_card/News_card'
import { NewsContext } from '../../App';

const News_container = () => {

  const data = useContext(NewsContext)



  const [news, setNews] = useState([]);


  const API_KEY = "612a3dacd56243068753ebb5ff3458bf";
  const url = "https://newsapi.org/v2/everything?q=";

  useEffect(()=>{
    fetchNews("India")
  },[])

  useEffect(()=>{
    fetchNews(data.search)
  },[data.search])

  const fetchNews= async(query)=>{
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json();
    setNews(data.articles);
    console.log(data.articles)
  }
  return (
    <div className=' pt-[200px] pl-20 flex flex-wrap w-[100%] h-[100%] gap-10'>
        {
          news.map((dat)=>{
            return(
              <div key={dat.title}>
              <News_card imglink = {dat.urlToImage} title={dat.title} description = {dat.description} url = {dat.url}/>
              </div>
            )
          })
        }
    </div>
  )
}

export default News_container