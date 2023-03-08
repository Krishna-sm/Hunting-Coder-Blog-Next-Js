import React, { Suspense, useEffect, useState } from 'react'

const Footer = () => {
    
const [time,setTime]=useState(new Date().toLocaleTimeString());
   setInterval(()=>
   {
        setTime(new Date().toLocaleTimeString())
   },1000)

  return (
    <>
            <div className="footer">
               <Suspense fallback={null} >copyright@krishna - {new Date().getFullYear()} <br /></Suspense>
               <Suspense fallback={null} >{time}</Suspense>
            </div>
    </>
  )
}

export default Footer