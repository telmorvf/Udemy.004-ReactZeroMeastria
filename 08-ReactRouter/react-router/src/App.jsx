// hooks
import { useState } from 'react'

// css
import './App.css'

// 101. Config React router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
//import { SearchForm } from "./components/SearchForm";

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

function App() {


  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 102. Links com reacf router */}
        <Navbar />

        {/* 109 search parms */}
        <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* 104 rotas dinamicas */}
          <Route path="/products/:id" element={<Product />} />

          {/* 106 nested route */}
          <Route path="/products/:id/info" element={<Info />} />

          {/* 109 search parms */}
          <Route path="/search" element={<Search />} />

          {/* 110 route redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />

          {/* 107 page 404 not found */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
