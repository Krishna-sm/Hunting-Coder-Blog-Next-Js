import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>

            <nav>
                <ul>
                    <li> <Link href={'/'}>Home</Link> </li>
                    <li><Link href={'/About'}>About</Link></li>
                    <li><Link href={'/Blog'}>Blog</Link></li>
                    <li><Link href={'/Contact'}>Contact</Link></li>
                </ul>
            </nav>

    </>
  )
}

export default NavBar