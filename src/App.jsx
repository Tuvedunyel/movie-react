import { useState, useEffect } from "react";
import Header from "./layout/Header";
import axios from "axios";

function App() {
  const [popular, setPopular] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1"
      )
      .then(res => {
        setPopular(res.data.results);
      });
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1"
        )
        .then(res => {
          setNewMovies(res.data.results);
        });
  });

  return (
    <>
      <Header />
      <section title='Populaire' className='films'>
        <div className='container-narrow'>
          <h2>Films populaire</h2>
          <div className='container-films'>
            {popular.slice(0, 7).map(movie => {
              return (
                <div className='movie' key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <span className='screen-reader-text'>{movie.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section title="Nouveau sur le site" className="films a-venir">
        <div className="container-narrow">
          <h2>À venir</h2>
          <div className="container-films">
            {newMovies.slice(0, 7).map(movie => {
              return (
                <div className="movie" key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <span className="screen-reader-text">{movie.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
