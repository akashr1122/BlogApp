import React, { useEffect } from 'react'

const ShowPost = () => {
 
 useEffect(async()=>{
  await axios.get('http://localhost:8000/posts')
   .then((res)=> console.log(res.data))
   .catch((error)=> console.log(error));
 },[])
  return (
    <div>ShowPost</div>
  )
}

export default ShowPost