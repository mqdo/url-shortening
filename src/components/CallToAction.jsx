import React from 'react'

const CallToAction = () => {
  return (
    <div className='w-full h-[240px] md:h-[200px] md:mt-20 bg-primary-700 bg-boost-mobile bg-center bg-cover md:bg-boost-desktop flex flex-col justify-center items-center text-white'>
      <h2 className='text-2xl sm:text-3xl font-bold pb-4 md:pb-6'>Boost your links today</h2>
      <button className='h-12 px-8 rounded-full bg-primary-400 text-white font-bold hover:opacity-80'>Get Started</button>
    </div>
  )
}

export default CallToAction