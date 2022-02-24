import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Browse from './components/Browse'
import Favoris from './components/Favoris'
import Movies from './components/Movies'
import Series from './components/Series'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Nos séries" element={<Series />} />
        <Route path="Nos films" element={<Movies />} />
        <Route path="Ma liste" element={<Favoris />} />
        <Route path="Rechercher" element={<Browse />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
