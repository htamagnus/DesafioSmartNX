import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from '../src/styles/stylesGlobals.scss';
import InitialPage from './pages/InitialPage/InitialPage';
import PageNotFound from './pages/PageNotFound/PageNotFound'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<InitialPage />} />
        <Route path="*" element= {<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
