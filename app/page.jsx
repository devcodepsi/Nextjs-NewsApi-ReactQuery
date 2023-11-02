'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const { push } = useRouter();
  useEffect(()=>{
    push('/category');
  },[])

  return null;
}

export default Home