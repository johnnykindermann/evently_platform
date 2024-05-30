import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div>
        <Link href="/">
          <Image 
            src='/assets/images/logo.svg'
            alt='logo'
            width={128}
            height={38}
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
