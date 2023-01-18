import React from 'react';

import heroImage from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <div className=' max-w-[1180px] mx-auto text-gray-900 flex flex-col md:flex-row-reverse pl-4 md:p-0 relative'>
      <div>
        <img src={heroImage} alt='hero image' className='h-[340px] sm:h-[482px] mx-auto w-auto object-cover object-left md:object-none md:translate-x-[220px]' />
      </div>
      <div className='md:h-[482px] md:absolute left-8 pr-4 pt-8 flex flex-col justify-center items-center md:items-start'>
        <h1 className='flex flex-col items-center md:items-start gap-1 sm:gap-3 text-4xl sm:text-5xl md:text-[64px] font-bold'>More than just<span>shorter links</span></h1>
        <div className='max-w-[480px]'>
          <p className='my-4 md:m-0 text-center md:text-left break-normal text-neutral-400 text-lg'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        </div>
        <button className='mt-4 md:mt-8 h-12 px-8 rounded-full bg-primary-400 text-white font-medium hover:opacity-80'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero