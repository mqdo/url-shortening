import React, { useState } from 'react';

import { Header, Hero, Shorten, Advanced, CallToAction, Footer } from './components';

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className=' pt-20 md:pt-32 w-full overflow-x-hidden' onClick={() => setToggleMenu(false)}>
        <Hero />
        <div className='w-full bg-gray-100'>
          <Shorten />
          <Advanced />
          <CallToAction />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App