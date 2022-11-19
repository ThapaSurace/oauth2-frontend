import React from 'react'
import { useParams } from 'react-router-dom'

const Post = ({posts}) => {
  const {id} = useParams()
  return (
    <>
    {
      posts.filter(post =>(post.id.toString() === id)).map(post=>(
        <div className=' max-w-6xl mx-auto my-5 bg-white rounded-sm shadow-sm shadow-gray-400' key={post.id}>
          <div className=' h-96'>
          <img src={post.img} alt={post.title} className='h-full w-full rounded-sm' />
          </div>
          <div className=' p-3'>
          <h1 className='text-4xl text-gray-600 font-bold text-center my-2'>{post.title}</h1>
          <p className='text-justify text-gray-700'>{post.longDesc}</p>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default Post