import React from 'react';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import About from './components/About-us/About';
import Practice from './components/Practices/Practice';
import Testimonials from './components/Testimonials/Testimonials'
function App() {
  return (
    <div className="App">
      <Hero />
      <Introduction />
      <About />
      <Practice />
      <Testimonials />
    </div>
  );
}

export default App;
