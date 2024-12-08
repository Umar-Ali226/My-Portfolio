import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
    <div className='left-NavSec'>
    <div className='name-link'>
      <Link href="/">Umar Ali</Link></div></div>
<div className='right-NavSec'>
  <div className='link'>
   {/* <Link href="/"><p>Home</p></Link> */}
   <Link href="/about-us"><p>About</p></Link>
   <Link href="/contact-us"><p>Contact</p></Link>
   <Link href="/skills"><p>Skills</p></Link>
       </div>
 </div> 
 </div>
  )
}

export default Navbar




