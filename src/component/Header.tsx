import Link from 'next/link'
import React from 'react'

function Header () {
  return (
    
    <ul className="head">
    <Link href="/"> <li>Home</li> </Link>
    <Link href="/about-us"> <li>About</li> </Link>
    <Link href="/career"> <li>Career</li> </Link>
    
  </ul>
  )
}

export default Header 