import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LinkCard = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className='w-full flex flex-col sm:flex-row items-center justify-between gap-3 bg-white shadow-sm rounded-lg text-sm font-medium'>
      <div className='border-b-2 w-full sm:border-none p-3 sm:p-4'>
        <p>{link.original}</p>
      </div>
      <div className='p-3 sm:p-4 pt-0 w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-primary-400'>
        <p className='w-full sm:text-right'>{link.short}</p>
        <CopyToClipboard text={link.short} onCopy={handleCopy}>
          <button className={`${copied ? 'bg-primary-700' : 'bg-primary-400'} w-full sm:max-w-[150px] rounded-md h-8 text-white text-sm hover:opacity-80`}>{copied ? 'Copied' : 'Copy'}</button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default LinkCard