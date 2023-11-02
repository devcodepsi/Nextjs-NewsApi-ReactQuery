"use client"
import { useParams } from 'next/navigation'
import { useQuery } from 'react-query'

import axios from 'axios'
import Link from 'next/link'


const CategoryId = () => {
    const params = useParams();
    const paramId = params.id;

  
    const getList = async () => {
        return await axios({
            method: 'get',
            url: `https://newsapi.org/v2/top-headlines?country=kr&category=${paramId}&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}`
          })
          .then( (response) =>  response)
          .catch( (error) => error);
    }

    const {isLoading, isError, data} = useQuery({
        queryKey: ['category'],
        queryFn:  async () => {
          try {
            let res = await getList();
            return res.data.articles;
          } catch (err) {
            if(err.response.status === 426){
                alert('로컬에서만 쓸 수 있는 무료 api임. 실서버에 쓰려면 돈 내야함.');
              }
          }
        }
      });



  if (isLoading ) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
    return (
    <>
    {data.map((item, index) => (
      <div key={index} style={{padding: '30px 10px', borderBottom: '1px solid #eee'}}>
        <Link style={{display: 'block'}} href={item.url} target='_blank'>
          <h3>{item.title}</h3>
          <div style={{paddingTop: '10px', paddingBottom: '10px'}}><img src={item.urlToImage} alt={item.title} style={{width: '100%'}} /></div>
          <p style={{wordBreak: 'break-all'}}>{item.description}</p>
        </Link>
      </div>
    ))}
    </>
    );
}

export default CategoryId;


