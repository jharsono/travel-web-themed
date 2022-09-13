import { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import balloons from '../src/assets/balloons.png';
import BodySection from './components/BodySection';

const App = () => {
  return (
      <div className="container w-fit">
        <Navigation/>
        <Hero
          img={balloons}
        />
        <BodySection />
      </div>
  )
}

export default App
