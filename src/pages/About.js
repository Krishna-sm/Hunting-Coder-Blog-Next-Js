import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
    <Head>
      <title>Hunting Coder | About Page</title>
    </Head>
           <div className="container b_container">
            <h1>About Page</h1>
            <div>
           <p>   It is a Tiny Blog , it Can have some blog for coding ...
              <br /> Inspire By codewithharry Hunting Coder blog 
             </p> <ul>
                <li>The Blog Contact Contact page with Save the Data in the File System</li>
                <li>It Provide a Blog Articles relected with the Articles</li>
                <li>It Contact Blog api which is Fetch Data in the Own Json File</li>
              </ul>
      <hr />
              <h2>Fack Description</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic eligendi assumenda aliquam quos dolorum! Consectetur aliquid non nemo modi temporibus qui totam amet nesciunt, quo alias placeat sed reprehenderit corrupti. Nesciunt, provident voluptas.</p>
    <h2>Contact us</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laudantium? Dolorum neque iste praesentium iure accusamus commodi animi, quae at autem fugit nisi! Explicabo deserunt, molestiae quam unde dolor adipisci id expedita aperiam nihil similique natus, magnam facere aliquid. Saepe, earum veniam ratione eos repellendus praesentium vitae nisi architecto maiores similique, expedita ipsum! Magnam, atque nemo.</p>
    <h2>Serive Afforts</h2>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea voluptate, sint dicta quaerat hic optio voluptatum architecto. Ipsa fugiat facilis itaque, officiis possimus perferendis, fugit eveniet id deleniti sed, obcaecati alias doloribus doloremque aliquid laboriosam labore. Voluptatibus dignissimos nostrum consectetur nulla asperiores quidem non?</p>
            </div>

            <div className="button_about"><Link href={'/'} ><button> &rarr;  Back to Home</button></Link></div>
           </div>
    </>
  )
}

export default About