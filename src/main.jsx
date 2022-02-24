import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Browse from './components/Browse'
import Favoris from './components/Favoris'
import Movies from './components/Movies'
import Series from './components/Series'
import Header from './layout/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Style from './sass/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Series' element={<Series />} />
          <Route path='/Films' element={<Movies />} />
          <Route path='/Liste' element={<Favoris />} />
          <Route path='/Rechercher' element={<Browse />} />
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
