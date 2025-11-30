import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import HomePages from './Components/home/HomePages'
import Footer from './Components/Footer/Footer'
import Culture from './Components/Culture/Culture'
import SinglePages from './Components/singelPages/SinglePages'

function App() {
  return (
    <>

        <Header/>

        <Routes>
          <Route path="/" element={<HomePages/>} />
          <Route path="/singlePages/:id" element={<SinglePages/>} />
          <Route path="/culture" element={<Culture/>} />
        </Routes>
        <Footer/>

      
    </>
  )
}

export default App
