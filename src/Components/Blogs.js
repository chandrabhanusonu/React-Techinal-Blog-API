import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from "../Components/Spinner"

const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs component");
    console.log(posts);
    return(
        <div className='w-10/12 max-w-[1080px] mx-auto mt-8'>
             {
                loading ? 

              (<Spinner />) :

               (
                posts.length === 0 ? 
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) :

                    (
                        posts.map( (post) => (

                        <div key={post.id}>
                            <p className='text-xl font-semibold text-orange-400 underline mb-3'>{post.title}</p>
                            <p className='text-[12px] text-green-600 mb-2'>
                                By <span className='text-[14px] text-orange-950'>{post.author}</span> on <span className='text-[14px] text-orange-950'>{post.category}</span>
                            </p>
                            <p className='text-[12px] text-cyan-500 mb-2'>
                                Posted on {post.date}
                            </p>
                            <p className='text-gray-600 mb-3'>
                                {post.content}
                            </p>
                            <div className='flex gap-3 flex-wrap mb-6 text-blue-800 cursor-pointer text-[14px]'>
                                {
                                    post.tags.map( (tag , index) => {
                                    return <span key={index}>{`#${tag}`}</span>
                                     })
                                }
                            </div>
                        </div>
                        ))
                    )
               )}
        </div>
    )   

           

}
export default Blogs