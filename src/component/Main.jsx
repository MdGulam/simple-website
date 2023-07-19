import React from 'react'
import { IoMdPhotos } from 'react-icons/io';
import { AiFillTag } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { BsEmojiSmileFill } from 'react-icons/bs';

const Main = () => {
    return (
        <>
            <div className=''>
                <img className='h-[320px] w-screen bg-cover' src="https://www.hdwallpapers.in/download/bear_lake_reflection_at_rocky_mountain_national_park_4k_5k_hd_nature-HD.jpg" alt="" />
            </div>
            <img className='rounded-full w-48 absolute -mt-[105px] ml-[530px]' src="https://th.bing.com/th/id/OIP._lupS0wgm6q7KiGPkewvMQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3" alt="" />

            <div className='mt-[90px] ml-[570px] text-lg font-semibold'>Safak Kocaoglu
                <p className='text-gray-500 text-base font-normal'>Hello my friends!</p>
            </div>
            <div className='grid grid-cols-12'>
                <div className='col-span-7 mt-6'>
                    <div className='h-36 shadow-xl border-gray-300 border-t-4 ml-10 mr-5'>
                        <span className='flex'>
                            <img className=' rounded-full w-10 mx-6 mt-3' src="https://th.bing.com/th/id/OIP._lupS0wgm6q7KiGPkewvMQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3" alt="" />
                            <p className='text-gray-500 mt-5'>What's in your mind safak?</p>
                        </span>
                        <hr className='mt-4 mx-10 border-1 border-gray-400' />
                        <li className='flex p-6 gap-9'>
                            <span className='flex gap-2'>
                                <IoMdPhotos className='text-2xl text-red-600' />
                                Photo or Video
                            </span>
                            <span className='flex gap-2'>
                                <AiFillTag className='text-2xl text-blue-600' />
                                Tag</span>
                            <span className='flex gap-2'>
                                <IoLocationSharp className='text-2xl text-green-600' />
                                Location</span>
                            <span className='flex gap-2'>
                                <BsEmojiSmileFill className='text-2xl text-yellow-600' />
                                Feelings</span>
                            <span className='ml-16 text-white font-semibold rounded-sm w-16 h-7 px-3 bg-green-600 '>Share</span>
                        </li>
                    </div>
                    <div className='h-32 shadow-xl border-gray-300 border-t-4 mt-6 ml-10 mr-5'>
                        <div className='flex mt-4 text-sm'>
                            <img className=' rounded-full w-7 mx-6' src="https://th.bing.com/th/id/OIP._lupS0wgm6q7KiGPkewvMQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3" alt="" />
                            <div className='font-semibold mt-1'>Safak kocaoglu</div>
                            <div className='ml-4 text-gray-500 mt-1'>5 mins ago </div>
                        </div>
                        <p className='text-gray-500 p-6'>Love For All, Hatred For None</p>
                    </div>
                </div>
                <div className='col-span-5 mt-4 mr-5'>
                    <h1 className='font-semibold'>User Information</h1>
                    <p className='text-gray-500'>City: New York</p>
                    <p className='text-gray-500'>Form: Madrid</p>
                    <p className='text-gray-500'>Relationship: Single</p>
                    <h1 className='font-semibold mt-5'>User Friends</h1>
                    <span className='flex gap-4 mt-4'>
                        <span>
                            <img className='h-24 w-20 mx-6 rounded-md' src="https://th.bing.com/th/id/OIP.R7r6I9Y3-afesZ227a-bgAHaJQ?w=182&h=228&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                            <h1 className='text-gray-500 ml-4'>Anna Durden</h1>
                        </span>
                        <span>
                            <img className='h-24 w-20 mx-6 rounded-md' src="https://th.bing.com/th/id/OIP.Rhm_ORh0h8FbiFtDHIDkwgHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                            <h1 className='text-gray-500 ml-6'>Jhon Carter</h1>
                        </span>
                        <span>
                            <img className='h-24 w-20 mx-6 rounded-md' src="https://th.bing.com/th/id/OIP.nyqSLmxpEHaR7iQQgO9oCQHaJK?w=160&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                            <h1 className='text-gray-500 ml-8'>Ellie kenn</h1>
                        </span>
                    </span>
                </div>
            </div>

        </>
    )
}

export default Main
