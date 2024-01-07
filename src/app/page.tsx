'use client'
import React, { useEffect } from "react";
import Login from './components/Login/Login';
import Header from "./components/Header/Header";
import './page.css'
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import HomePage from "./pages/homePage"
import LoginPage from "./pages/loginPage"
import SignupPage from "./pages/signupPage"
function Home() {
  useEffect(() => {
    document.title = 'Anshen';
  }, []);

  return (
    <>
      
      <HashRouter>
        <Header/>
        
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/Login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<SignupPage/>}></Route>

        </Routes>
        
      </HashRouter>
      
    </>
    
    
  )
}
export default Home;