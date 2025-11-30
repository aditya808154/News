import React from 'react'
import logo from '../../assets/image/logo.png'
import header from '../../assets/image/headerb.png'

function Head() {
  return (
    <>
    <section className='head'>
        <div className="container flexSB paddingTB">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="ad">
                <img src={header} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Head
