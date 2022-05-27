import React from 'react'
import { useState, useEffect } from 'react';

export default function Home() {

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <div>Please click on a links above :D </div>
      
      <div>---</div>

      <div className='RoverSec'>
        <h2>Curiosity Rover</h2>
        <div className='Information'>
          <h3>
            NASA's Curiosity rover, built to explore the Gale crater on Mars, was launched on November 26, 2011 and successfully reached
            its destination on August 6 2012. The rover is still active today (2022) and it's been said NASA has hopes of bringing back 
            to earth some day! The 25 pictures in the CurRov link above, gives a small sample of the hundreds of photos Curiosity has sent
            back to us of Mars, from 2012.
          </h3>
        </div>
      </div>

      <div>---</div>

      <div className='RoverSec'>
          <h2>Spirit Rover</h2>
          <div className='Information'>
            <h3>
              NASA's Spirit rover was launched June 10, 2003, tasked to figure out any and everything it could about past life on Mars, current 
              and past climate, ect. It landed on January 4, 2004, sending back photos and info to the NASA team till 2010, exceeding its expected 
              900 day journey. Unfortunately, in 2010 the rover got stuck in soft sand, ending it's mission. The 25 sample photos under the SprRov 
              link were taken in 2004. 
            </h3>
          </div>
      </div>

        <div>---</div>

        <div className='RoverSec'>
          <h2>Opportunity Rover</h2>
          <div className='Information'>
            <h3>
              NASA's Opportunity rover was launched on July 7, 2003 and landed in Meridiani Planum, a plain on Mars, on January 25, 2004, three weeks after 
              its twin Spirit. The Rover stayed acticve for 15 years before shuting down in 2018. Opportunity's journey was a long and hard one, it often slipped 
              or got stuck on the soft slopes of Mars and faced dust stroms that blocked the rover's only source of power, the sun, from view for hours on end.
              Even with the many challenges, Opportunity was able to exceed it's expected life span and send back some outstanding pictures of Mars, the 25 photos
              in the OppRov link are from 2004.

            </h3>
          </div>
        </div>

      
    </div>
  )
}
