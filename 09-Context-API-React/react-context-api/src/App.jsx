// css
import './App.css'

// hooks
import React, { useState, Component } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// components
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import About from './pages/About'
import New from './pages/New'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div className="App">
      <h1>React Context API</h1>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<New />} />

          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
