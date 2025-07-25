import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="bg-[#f9eddd] flex justify-center sm:justify-between items-center shadow-md">

  
    
<Link href='/'>

  <Image
      src="/Images/Main_logo.png"
      width={140}
      height={100}
      alt="logo"
    />
    </Link>
    <div className='text-center hidden sm:block'>
      <Link className='!text-black !no-underline hover:!no-underline' href={'/'}>
    <p className="text-[22px] sm:text-[24px] md:text-[30px] mb-0 ">Premium Quality Dry Fruits</p>
    <p className='mt-0 mb-3'>"The best way to eat nature"</p>
    </Link>
    </div>
   <div className='text-center mr-[9px] hidden sm:block'>
    
    <p  className='font-bold !mb-[5px] flex'><Image src={'/Images/email.svg'} width={20} height={20} alt='email'/> &nbsp; &nbsp; support@gmail.com</p>
    <p className='font-bold flex'><Image src={'/Images/whatsapp.svg'} width={20} height={20} alt='whatsapp'/> &nbsp; &nbsp; +91 88776 XXXXX</p>
    
   </div>
  </div>


  )
}

export default Header