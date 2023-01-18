import React from 'react';

import brandRecognition from '../../assets/images/icon-brand-recognition.svg';
import detailedRecords from '../../assets/images/icon-detailed-records.svg';
import fullyCustomizable from '../../assets/images/icon-fully-customizable.svg';
import AdvancedCard from './AdvancedCard';

const Advanced = () => {
  return (
    <div className="px-4 md:px-8 max-w-[1180px] mx-auto flex flex-col gap-4 overflow-hidden">
      <div className='text-center max-w-[500px] mx-auto'>
        <h2 className='text-2xl sm:text-3xl font-bold pb-4'>Advanced Statistics</h2>
        <p className='text-sm text-neutral-400 font-medium leading-loose'>Track how your links are performing across the web with our advanced statistics dashboard</p>
      </div>
      <div className='relative'>
        <div className='relative z-20 md:flex md:py-16'>
          <div>
            <AdvancedCard imgSrc={brandRecognition} title='Brand Recognition' details="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />
          </div>
          <div className='md:translate-y-8'>
            <AdvancedCard imgSrc={detailedRecords} title='Details Records' details="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision." />
          </div>
          <div className='md:translate-y-16'>
            <AdvancedCard imgSrc={fullyCustomizable} title='Fully Customizable' details="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
          </div>
        </div>
        <div className='block md:hidden w-2 h-[600px] bg-primary-400 absolute left-[50%] top-20 -translate-x-[50%] z-10'></div>
        <div className='hidden md:block w-[calc(100%-2rem)] h-2 bg-primary-400 absolute left-[50%] top-52 -translate-x-[50%] z-10'></div>
      </div>
    </div>
  )
}

export default Advanced