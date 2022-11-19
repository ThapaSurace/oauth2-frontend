import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({post}) => {
  const navigate = useNavigate()

  return (
    <>
    <div className=" bg-white card h-full shadow-md rounded-sm">
        <div className=' h-48'>
        <img src={post.img} alt={post.title} className='h-full w-full rounded-sm' />
        </div>
       <div className='flex flex-col gap-y-4 justify-between p-4'>
       <h1 className='text-center font-medium'>{post.title}</h1>
        <p className='text-justify'>{post.desc}</p>
        <button onClick={()=> navigate(`post/${post.id}`)} className='p-2 rounded-sm bg-red-500 duration-100 hover:bg-red-600 text-white font-medium'>Read More</button>
       </div>
    </div>
    </>
  )
}

export default Card