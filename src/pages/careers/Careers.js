import React from 'react'

export default function Careers() {
  return (
    <div className='careers'>
      
    </div>
  )
}
export const careersLoader = async()=>{
    const res= await fetch('https://localhost:4000/careers')
    return res.json()
}
