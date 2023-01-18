import React from 'react'

const AdvancedCard = ({ imgSrc, title, details }) => {
  return (
    <div className='bg-white rounded-md shadow-sm flex flex-col items-center mt-16 mb-20 md:m-4 px-8 pb-8 text-center'>
      <div className='bg-primary-700 rounded-full w-[72px] h-[72px] grid place-items-center -translate-y-[36px]'>
        <img src={imgSrc} alt={title} className='h-10 w-10' />
      </div>
      <h3 className='-translate-y-3 text-lg font-bold'>{title}</h3>
      <p className='text-sm text-neutral-400 font-medium'>{details}</p>
    </div>
  )
}

export default AdvancedCard