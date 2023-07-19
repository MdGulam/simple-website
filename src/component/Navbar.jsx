import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { IoNotifications } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

const Navbar = () => {
  return (
    <>
    <nav className='h-14 w-full text-white bg-blue-500'>
    <ul className='flex text-center items-center pt-3 justify-center '>
        <li className='pr-[770px] text-2xl'>FakeBook</li>
        <input type="text" placeholder='search for friend,post or video' className='rounded-full absolute w-96 px-12 mr-60 py-1' />
        <IoIosSearch className='absolute text-black mr-[580px] text-lg mt-1'/>
        <li className='font-semibold '>Homepage</li>
        <li className='font-semibold ml-4 mr-16'>Timeline</li>
        <span className='space-x-3 flex'>
        <li className='text-xl'>
             <span className='flex items-center'>
                <span className='bg-red-600 rounded-full absolute top-0 ml-2 mt-2.5 text-xs w-4 text-white'>1</span>
             <BsFillPersonFill className=''/>
             </span>
             </li>
        <li className=' text-xl'>
            <span className='space-x-3 flex'>
                <span className='bg-red-600 rounded-full absolute ml-6 top-0 mt-2.5 text-xs w-4 text-white'>2</span>
             <BsFillChatLeftTextFill className=''/>
             </span>
              </li>
        <li className='text-xl'>
            <span className='space-x-3 flex'>
            <span className='bg-red-600 rounded-full absolute ml-5 top-0 mt-2.5 text-xs w-4 text-white'>1</span>
             <IoNotifications/>
             </span>
              </li>
        </span>
        <li> <img src="https://i.pinimg.com/originals/bc/af/18/bcaf18ce6054768da1628a939e2b4f65.jpg" className='h-9 w-9 rounded-full ml-64' alt="" /> </li>
    </ul>
    </nav>
    </>
  )
}

export default Navbar
