import React, { useState } from 'react';
import axios from 'axios';

import { useLocalStorage } from '../../hooks';
import LinkCard from './LinkCard';

const Shorten = () => {
  const [error, setError] = useState(false);
  const [link, setLink] = useState('');
  const [linksList, setLinksList] = useLocalStorage('links-list', []);

  const handleChangeInput = (e) => {
    setError(false);
    setLink(e.target.value);
  };

  const handlePostURL = async () => {
    const res = await axios.post(`https://api.shrtco.de/v2/shorten?url=${link}`);
    const { data } = res;
    const { result } = data;
    return result;
  }

  const handleSubmitLink = async (e) => {
    e.preventDefault();
    if (link === '') {
      setError(true);
      return;
    }
    try {
      const result = await handlePostURL();
      const { original_link: original, short_link: short } = result;
      setLinksList((prev) => ([{ original, short }, ...prev]));
      setLink('');
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return (
    <div className='px-4 pt-16 md:px-8 max-w-[1180px] mx-auto mt-[130px] sm:mt-[125px] md:mt-[120px] -my-8'>
      <div className="-translate-y-[130px] sm:-translate-y-[125px] md:-translate-y-[120px] flex flex-col gap-4">
        <form onSubmit={handleSubmitLink} className='w-full flex flex-col sm:flex-row gap-5 bg-primary-700 bg-boost-mobile md:bg-boost-desktop bg-top bg-cover p-5 sm:p-8 rounded-lg'>
          <div className=' w-full sm:w-[82%]'>
            <input
              type="text"
              value={link}
              onChange={handleChangeInput}
              placeholder="Shorten a link here..."
              className={`${error ? 'border-secondary border-[3px] placeholder:text-secondary' : ''} w-full h-10 sm:h-12 rounded-md p-4 placeholder:text-sm sm:placeholder:text-base`}
            />
            {error
              ? <p className='text-secondary italic text-xs sm:text-sm pt-1 sm:pt-2'>
                Please add a link
              </p>
              : null
            }
          </div>
          <button type="submit" className='w-full sm:w-[18%] bg-primary-400 h-10 sm:h-12 rounded-md text-white font-medium hover:opacity-80'>Shorten It!</button>
        </form>
        {linksList.map((link, index) => (
          <LinkCard key={index} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Shorten;
