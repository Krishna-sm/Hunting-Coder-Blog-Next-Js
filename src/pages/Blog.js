import Head from 'next/head'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Blog = () => {
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
      <title>Hunting Coder | Blog Page</title>
    </Head>
        <div className="container">
          <h1>Blogs</h1>
            <div className="b_container">
           {isLoading ? (
            <div className="container">
              loading....
            </div>
           ):(

          blog.map((cur,i)=>(
            <Link key={i}  href={`/Blog/${cur.slug}`} >
            <div className="blog blogs_container">
              <h3>{cur.title}</h3>
            <p>{cur.desc}</p>
            <div className="button_blog"><Link href={`/Blog/${cur.slug}`} ><button> Read More &rarr;</button></Link></div>
            </div>
            </Link>
          ))


           ) }
            </div>
        </div>
    </>
  )
}

export default Blog