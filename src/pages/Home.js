import React from 'react'
import Card from '../components/Card'
const Home = ({posts}) => {
  return (
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 max-w-6xl mx-auto gap-4 mt-10 '>
        {
            posts.map(post=>(
                <Card  key={post.id} post={post} />
            ))
        }
    </div>
    </>
  )
}

export default Home