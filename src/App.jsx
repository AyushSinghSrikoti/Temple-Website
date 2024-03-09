import { useState } from 'react'
import Accomodations from './components/Accomodations';
import AboutPage from './components/AboutPage';
import Gallery from './components/Gallery';
import Travel from './components/Travel';
import Contact from './components/Contacts';
import Significance from './components/Significance';
import Home from './components/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from "react-router-dom";

function App() {

  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/accomodations" element={<Accomodations/>}/>
      <Route path="/about" element={ <AboutPage/>}/>
      <Route path="/contact" element={< Contact/>}/>
      <Route path="/gallery" element={ <Gallery/>}/>
      <Route path="/travel" element={< Travel/>}/>
      <Route path="/significance" element={ <Significance/>}/>
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
