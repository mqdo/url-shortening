import React, { useState } from 'react';

import { Header, Hero, Shorten, Advanced, CallToAction, Footer } from './components';

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className='mt-16 md:mt-28 w-full overflow-x-hidden' onClick={() => setToggleMenu(false)}>
        <Hero />
        <Shorten />
        <Advanced />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}

export default App