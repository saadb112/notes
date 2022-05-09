import React from 'react'

const api = () => {
    const Data = async()=>{
        let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=73ef906e9d9d4a9ebfa83e4f67b40720");
        const json = await data.json()
        console.log(json) 

    }
    Data()
  return (
    <div></div>
  )
}

export default api