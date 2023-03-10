import React, { useEffect } from 'react';

import logo from '../assets/images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ toggleMenu, setToggleMenu }) => {
  const handleScroll = () => {
    if (window.innerWidth <= 768) return;
    const header = document.getElementById('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('md:h-16');
      header.classList.add('md:rounded-full');
      header.classList.add('md:mt-2');
      header.classList.add('md:shadow-sm');
      header.classList.remove('md:h-28');
    } else {
      header.classList.remove('md:h-16');
      header.classList.remove('md:rounded-full');
      header.classList.remove('md:mt-2');
      header.classList.remove('md:shadow-sm');
      header.classList.add('md:h-28');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div id='header' className='bg-white mx-auto max-w-[1180px] h-16 md:h-28 flex justify-between items-center p-4 md:p-8 fixed left-0 right-0 top-0 z-50'>
      <div className='flex justify-between items-center gap-10'>
        <img src={logo} alt='logo' className='w-auto h-7' />
        <div className='hidden md:flex justify-between items-center gap-6'>
          <a href='' className='font-medium text-sm text-neutral-400 hover:text-neutral-900 cursor-pointer'>Features</a>
          <a href='' className='font-medium text-sm text-neutral-400 hover:text-neutral-900 cursor-pointer'>Pricing</a>
          <a href='' className='font-medium text-sm text-neutral-400 hover:text-neutral-900 cursor-pointer'>Resources</a>
        </div>
      </div>
      <div className='hidden md:block font-medium text-sm'>
        <button className='w-24 h-8 rounded-full hover:bg-neutral-50 text-neutral-400 hover:text-black'>Login</button>
        <button className='w-24 h-8 rounded-full bg-primary-400 text-white hover:opacity-80'>Sign Up</button>
      </div>
      <button className='block md:hidden' onClick={() => setToggleMenu((prev) => !prev)}>
        <GiHamburgerMenu className='text-neutral-400 text-2xl' />
      </button>
      {
        toggleMenu
          ? <div className='w-[280px] absolute left-[50%] -translate-x-[50%] top-16 bg-primary-700 rounded-lg p-8 divide-y-[0.5px] divide-neutral-500 flex flex-col gap-6 justify-between font-medium' onClick={() => setToggleMenu(false)}>
            <div className='flex flex-col justify-between items-center gap-8'>
              <a href='' className=' text-neutral-300 hover:text-white cursor-pointer'>Features</a>
              <a href='' className=' text-neutral-300 hover:text-white cursor-pointer'>Pricing</a>
              <a href='' className=' text-neutral-300 hover:text-white cursor-pointer'>Resources</a>
            </div>
            <div className='flex flex-col items-center gap-8 pt-4 '>
              <button className='w-full h-10 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white'>Login</button>
              <button className='w-full h-10 rounded-full bg-primary-400 text-white hover:opacity-80'>Sign Up</button>
            </div>
          </div>
          : null
      }
    </div>
  )
}

export default Header