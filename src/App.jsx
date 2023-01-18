import React, { useState } from 'react';

import { Header, Hero, Shorten, Advanced, CallToAction, Footer } from './components';

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='bg-gray-50'>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className=' pt-20 md:pt-32 w-full overflow-x-hidden' onClick={() => setToggleMenu(false)}>
        <Hero />
        <Shorten />
        <Advanced />
        <CallToAction />
        <Footer />
      </div>
    </div>
  )
}

export default App