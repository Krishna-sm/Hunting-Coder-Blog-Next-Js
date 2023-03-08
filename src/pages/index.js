
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const index = () => {
const [blog,setBlog]=useState([]);
const [isLoading,setisLoading]=useState(false);
  useEffect(()=>{
      const getData = async ()=>{
       try {
        setisLoading(true);
        const res = await fetch('/api/blog',{
          method:"POST"
        });
        const data = await res.json();
        setisLoading(false);

        setBlog(data.data);
       } catch (error) {
        setisLoading(false);
        
       }
      }
        getData();
  },[])
  return (
    <>
      <Head>
      <title>Hunting Coder | Home Page</title>
    </Head>
      <div className="container">
       <div className="header">
       </div>
      <div className="header_image">
      <Image loading='lazy' src={'/imagesw.jpg'} width={200} height={200} alt="Image" />
      </div>
       <h1>Coding Hunter</h1>
      <div className="blogs">

        {
              isLoading ? (
                <div>loading....</div>
              )
              :
              (
                  blog.map((cur,i)=>(
                    <Link key={i} href={`/Blog/${cur.slug}`} >
                    <div className="blog">
                      <h3>{cur.title}</h3>
                    <p>{cur.desc}</p>
                    </div>
                    <div className="button_blog"><Link href={`/Blog/${cur.slug}`} ><button> Read More &rarr;</button></Link></div>
                    </Link>
                  ))
              )
        }


      


       
      </div>
      </div>
    </>
  )
}

export default index