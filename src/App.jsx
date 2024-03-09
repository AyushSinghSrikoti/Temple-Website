import { useState } from 'react'
import Accomodations from './components/Accomodations';
import AboutPage from './components/AboutPage';
import Gallery from './components/Gallery';
import Travel from './components/Travel';
import Contact from './components/Contacts';
import Home from './components/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from "react-router-dom";

function App() {
   
  //created routes for navigation

  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/accomodations" element={<Accomodations/>}/>
      <Route path="/about" element={ <AboutPage/>}/>
      <Route path="/contact" element={< Contact/>}/>
      <Route path="/gallery" element={ <Gallery/>}/>
      <Route path="/travel" element={< Travel/>}/>
    </>
  )

  const router = createBrowserRouter(routes);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
