import { useEffect } from 'react';

import ReactGA from 'react-ga';

import { Nav } from '../Components/Nav'
import { Hero } from '../Components/Hero'

export default function Home() {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <div>
      <div className="container p-8 flex flex-col justify-start items-center m-auto h-screen">

        <Nav />

        <Hero />

      </div>
    </div>
  )
}