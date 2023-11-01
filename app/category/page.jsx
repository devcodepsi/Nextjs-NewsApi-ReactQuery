"use client"
import styles from './page.module.css'
import Image from 'next/image'

import axios from 'axios'
import {useState, useEffect} from 'react'


const Category = () => {
  const [list, setList] = useState([]);

  const getList = () => {
      axios({
          method: 'get',
          url: `https://newsapi.org/v2/top-headlines?country=kr&category=&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}`
        })
          .then(function (response) {
            setList(response.data.articles);
          });
  }

  useEffect(() => {
      getList();
  }, []);

  return (
    <>
    {list.map((item, index) => (
      <div key={index} style={{padding: '30px 10px', borderBottom: '1px solid #eee'}}>
        <h3 style={{fontSize: '20px'}}>{item.title}</h3>
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}><img src={item.urlToImage} alt={item.title} style={{width: '100%'}} /></div>
        <p style={{wordBreak: 'break-all'}}>{item.description}</p>
      </div>
    ))}
    </>
  )
}

export default Category