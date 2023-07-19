import React from 'react'
import { RiWifiFill } from 'react-icons/ri';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdGroup } from 'react-icons/md';
import { BsBookmarkFill } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoBagOutline } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <>
            <aside className='w-52 px-4 py-6 space-y-6 shadow-xl h-full'>
                <div className='flex gap-3 text-lg'>
                    <RiWifiFill className='rotate-45 mt-1' />
                    Feed
                </div>
                <div className='flex gap-3 text-lg'>
                    <BsFillChatLeftTextFill className='mt-1.5' />
                    Chats
                </div>
                <div className='flex gap-3 text-lg'>
                    <AiFillPlayCircle className='mt-1.5' />
                    Videos</div>
                <div className='flex gap-3 text-lg'>
                    <MdGroup className='mt-1.5' />
                    Groups</div>
                <div className='flex gap-3 text-lg'>
                    <BsBookmarkFill className='mt-1.5' />
                    Bookmarks</div>
                <div className='flex gap-3 text-lg'>
                    <AiOutlineQuestionCircle className='mt-1.5' />
                    Questions</div>
                <div className='flex gap-3 text-lg'>
                    <IoBagOutline className='mt-1.5' />
                    Jobs</div>
                <div className='flex gap-3 text-lg'>
                    <MdDateRange className='mt-1.5' />
                    Events</div>
                <div className='flex gap-2 text-lg'>
                    <FaGraduationCap className='mt-1.5 text-xl' />
                    Courses</div>
                <div className='bg-gray-200 px-6 h-9 rounded-sm pt-1 w-36  '>Show More</div>
                <hr className='border-1 border-gray-400 w-44'/>

                <div className='flex text-sm text-gray-600'>
                <img className='h-7 w-7 mx-2 rounded-full' src="https://th.bing.com/th/id/OIP.R7r6I9Y3-afesZ227a-bgAHaJQ?w=182&h=228&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                Anna Durden
                </div>
                <div className='flex text-sm text-gray-600'>
                <img className='h-7 w-7 mx-2 rounded-full' src="https://th.bing.com/th/id/OIP.Rhm_ORh0h8FbiFtDHIDkwgHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                Jhon Carter
                </div>
                <div className='flex text-sm text-gray-600'>
                <img className='h-7 w-7 mx-2 rounded-full' src="https://th.bing.com/th/id/OIP.nyqSLmxpEHaR7iQQgO9oCQHaJK?w=160&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                Ellie kenn
                </div>
                <div className='flex text-sm text-gray-600'>
                <img className='h-7 w-7 mx-2 rounded-full' src="https://th.bing.com/th/id/OIP.nyqSLmxpEHaR7iQQgO9oCQHaJK?w=160&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                Dowra Hawks
                </div>
            </aside>
        </>
    )
}

export default Sidebar
