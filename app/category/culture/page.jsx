"use client"
import Image from 'next/image'

import axios from 'axios'
import {useState, useEffect} from 'react'

const Culture = () => {
  const [list, setList] = useState([]);

  const getList = () => {
      axios({
          method: 'get',
          url: `https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}`
        })
          .then(function (response) {
            setList(response.data.articles);
          }).catch((resolve) => {
            if(resolve.response.status === 426){
              alert('로컬에서만 쓸 수 있는 무료 api임. 실서버에 쓰려면 돈 내야함.');
            }
          });
  }

  useEffect(() => {
      getList();
  }, []);

  return (
    <>
    {list.map((item, index) => (
      <div key={index} style={{padding: '30px 10px', borderBottom: '1px solid #eee'}}>
        <h3>{item.title}</h3>
        <p style={{wordBreak: 'break-all'}}>{item.description}</p>
      </div>
    ))}
    </>
  )
}

export default Culture