import React from 'react';

import logo from '../assets/images/logo-white.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className=' w-full bg-neutral-900 text-white'>
      <div className='w-full md:max-w-[1180px] mx-auto flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between py-10 px-8 md:py-14'>
        <img src={logo} alt='logo' className='h-7 w-auto' />
        <div className='pt-8 md:p-0 flex flex-col md:flex-row gap-8 md:gap-16'>
          <div className='flex flex-col items-center md:items-start gap-1'>
            <h4 className='pb-2 font-bold'>Features</h4>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Link Shortening</a>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Branded Links</a>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Analytics</a>
          </div>
          <div className='flex flex-col items-center md:items-start gap-1'>
            <h4 className='pb-2 font-bold'>Resources</h4>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Blog</a>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Developers</a>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Support</a>
          </div>
          <div className='flex flex-col items-center md:items-start gap-1'>
            <h4 className='pb-2 font-bold'>Company</h4>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>About</a>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Our Team</a>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Careers</a>
            <a href='' className='text-sm text-neutral-400 hover:text-white'>Contact</a>
          </div>
        </div>
        <div className='pt-8 md:p-0 flex gap-6'>
          <a href='' className='hover:opacity-80'>
            <img src={facebook} alt='facebook icon' className='h-5 w-auto' />
          </a>
          <a href='' className='hover:opacity-80'>
            <img src={twitter} alt='twitter icon' className='h-5 w-auto' />
          </a>
          <a href='' className='hover:opacity-80'>
            <img src={pinterest} alt='pinterest icon' className='h-5 w-auto' />
          </a>
          <a href='' className='hover:opacity-80'>
            <img src={instagram} alt='instagram icon' className='h-5 w-auto' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer