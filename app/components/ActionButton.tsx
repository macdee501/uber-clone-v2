import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ActionButton() {
  return (
    <div className='flex flex-row bg-gray-400 mt-2 justify-between'>
        <Link href='/search' >
        <div className="bg-white p-4 m-4 items-center rounded" >
            <Image  src='/uber-car.jpg' width={50} height={50} alt=''/>
            <p>Order A ride</p>
        </div>
      
        </Link>
        <Link href='/search' >
        <div className="bg-white p-4 m-4 items-center rounded ">
            <Image  src='/uber-car.jpg' width={50} height={50} alt=''/>
            <p>Schedule A ride</p>
        </div>
        </Link>
    </div>
  )
}
