import React from 'react';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import About from './components/About-us/About';
import Practice from './components/Practices/Practice';
import Testimonials from './components/Testimonials/Testimonials'
import Team from './components/Team/Team';
import Faq from './components/Faq/Faq';
import NewsLetter from './components/NewLetter/NewsLetter';

function App() {
  return (
    <div className="App">
      <Hero />
      <Introduction />
      <About />
      <Practice />
      <Testimonials />
      <Team />
      <Faq />
      <NewsLetter />
    </div>
  );
}

export default App;
