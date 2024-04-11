import React from 'react'
import Gap from '../assets/7187971_2504-ai.png'
import Gap2 from '../assets/7007393_2424-aiw.png'

const gap = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='bg-cover h-28 w-36 my-10 ' style={{backgroundImage: `url(${Gap})`}}></div>
    </div>
  )
}

export default gap