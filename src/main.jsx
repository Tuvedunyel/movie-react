import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import movieReducer from './features/movie'

import App from './App'
import Browse from './components/Browse'
import Favoris from './components/Favoris'
import Movies from './components/Movies'
import Series from './components/Series'
import Style from './sass/style.scss';

const store = configureStore({
  reducer: { 
    movies: movieReducer
   }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Series' element={<Series />} />
          <Route path='/Films' element={<Movies />} />
          <Route path='/Liste' element={<Favoris />} />
          <Route path='/Rechercher' element={<Browse />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
