import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Card = () => {
    const [userData, setUserData] = useState([])

    console.log(userData, "userData");

    const fetchUSers = async () => {
        try {
            const response = await axios.get('https://metricoid-assessment.onrender.com/getAllUSers')
            console.log(response.data.users);

            setUserData(response.data.users)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchUSers()
    }, [])

    return (
        <>
            <div className='h-screen w-full flex justify-center items-center mt-7 bg-gray-700 gap-6 '>
                {userData?.map((u, i) => (
                    <>
                        <div className=' p-4  bg-white'>
                            <div className='flex justify-between items-center'>
                                <div className='w-[15%] rounded-full  overflow-hidden'>
                                    <img src={u.profileImage} alt="profileImg" className='object-cover' />
                                </div>
                                <div className='p-5 w-[70%] '>
                                        <p className='font-semibold text-[16px]'>{u.name}</p>
                                        <p className='font-semibold text-[14px] text-purple-400'>{u.designation}</p>
                                </div>
                                <div className='w-[15%] border'>
                                    <p className='capitalize font-semibold text-[18px] text-purple-500'>{u.followStatus}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-[18px] text-purple-400 text-ellipsis'>{u?.discription}</p>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <div className='flex justify-start gap-3 items-center'>
                                    <p className='font-semibold text-[18px] '>{u.task}</p>
                                </div>
                                <div className='flex justify-start gap-3 items-center'>
                                    <p className='font-semibold text-[18px] '>{u.reviews}</p>
                                </div>
                            </div>

                        </div>
                    </>
                ))}

            </div>


        </>
    )
}

export default Card