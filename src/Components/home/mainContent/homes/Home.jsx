import React from 'react'
import './style.css'
import Popular from '../popular/Popular'
import Ppost from '../Ppost/Ppost'
import Life from '../life/Life'
import Music from '../music/Music'
import Side from '../../sideContent/Side/Side'

function Home() {
  return (
    <>
    <main>
        <div className="container">
            <section className='mainContainer'>
              <Popular/>
              <Ppost/>
              <Life/>
              <Music/>
            </section>
            <section className='sideContainer'>
              <Side/>
            </section>
        </div>
    </main>
    </>
  )
}

export default Home