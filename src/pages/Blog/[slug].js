import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [datas,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
    const router = useRouter();
    const {slug} = router.query;
    

    const fetchData = async ()=>{
     try {
      setIsLoading(true);
      const res = await fetch('/api/blog',{
        method:"POST"
      });
      let data = await res.json();

      data = data.data.filter((cur)=>{
        return cur.slug===slug;
      })
      if(data.length>0)
      {
        setIsLoading(false);

        setData(data);
      }
      else{
      setIsLoading(false);

        router.push('/');
      }
     } catch (error) {
      setIsLoading(false);

      router.push('/');

      
     }
    }
    

useEffect(()=>{
  fetchData();
},[])

function createMarkup(data) {
  return {__html: data};
}
if(isLoading)
{
  return <div className="container">loading....</div>
}
  return (
      <>
        <Head>
        <meta name="description" content={slug} />
        <title>Coding Hunter | {slug} </title>
        </Head>
               {
               datas.map((cur,i,arr)=>(
                <div key={i} className="container">
                <h1>{cur.title}</h1>
               <div className="description">
               <p dangerouslySetInnerHTML={createMarkup(cur.content)}/> 
               </div>
            </div>
            // <p>s</p>
               ))
               }
                
    
    </>
  )
}

export default App