import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Contact = () => {
  const router = useRouter();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const SubmitHandler=async(e)=>{
        e.preventDefault();
       if(!name || !email || !message)
       {
        alert("all field are required");
       }
       else{
        const data = {
          name,email,message
        }
       try {
        const res = await fetch("api/contact",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
        const response = await res.json();
        // console.log(response);
        alert(response.msg);
       } catch (error) {
        alert(response.msg);
        
       }
        setName("");
        setEmail("");
        setMessage("");
        router.push("/");
       }
  }
  return (
    <>
        <Head>
          <title>Coding Hunter | Contact Page</title>
        </Head>
            <div className="container">
              <h1> Contact Us :- </h1>
              <div className="contact-container">
                 <form onSubmit={SubmitHandler} method="post">
                 <label htmlFor="">Name</label>
                  <input type="text" placeholder='Enter Name'  value={name} onChange={(e)=>setName(e.target.value)} />
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder='Enter Email'  value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <label htmlFor="">Message</label>
                 <textarea name="" id="" cols="30" value={message}  onChange={(e)=>setMessage(e.target.value)}  rows="10" placeholder='Enter message ...' ></textarea>
                  <div className="button"><button>Submit</button></div>
                 </form>
              </div>
            </div>

    </>
  )
}

export default Contact