import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import  movieReducer  from './features/movie'

import App from './App'
import Style from './sass/style.scss';


const store = configureStore({
  reducer: { 
    movies: movieReducer
   }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
