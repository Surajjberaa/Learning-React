import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // let [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[Github])

  return (
    <div className='m-4 text-center bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers} 
    <img src={data.avatar_url} alt="" width={300}/>    
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response =await fetch("https://api.github.com/users/hiteshchoudhary")

    return response.json()
}