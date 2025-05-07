import Link from 'next/link'
import React from 'react'
import { FaRegCircle, FaSquareFull } from 'react-icons/fa'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { PiLineVertical } from 'react-icons/pi'

export default function page() {
  return (
    <>
        <Link href='/'>
        <IoArrowBackCircleOutline className='text-3xl'/>
        </Link>
    <div className="bg-red-500 m-1 p-5">

    <div className='bg-green-500 flex mt-2 '>
        <div className="bg-gray-500 justify-center ml-2">
            <FaRegCircle className='text-2xl'/>
            <PiLineVertical  className='text-2xl'/>
            <FaSquareFull className='text-2xl'/>
        </div>
        <div className="flex flex-col justify-between">
            <input className='bg-gray-200 border-none mb-4 ml-2' placeholder='Pick Up Location?'/>
            <input className='bg-gray-200 mt-2 ml-2'placeholder='Drop Of Location?'/>
        </div>
    </div>
        <div className="bg-yellow-300 justify-center">
            <input value='Confirm Ride' className='bg-gray-800 m-2 rounded text-white text-center'/>
        </div>
    </div>
    </>
  )
}
