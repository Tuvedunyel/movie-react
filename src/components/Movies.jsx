import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../layout/Header";

function Movies() {
  const [popular, setPopular] = useState([]);
  const [bestRated, setBestRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [onCinema, setOnCinema] = useState([]);

  useEffect(() => {
    fetchApi(
      "https://api.themoviedb.org/3/movie/popular?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setPopular,
      "popularMovies"
    );
    fetchApi(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setBestRated,
      "bestRatedMovies"
    );
    fetchApi(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setUpComing,
      "upComingMovies"
    );
    fetchApi(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setOnCinema,
      "onCinemaMovies"
    );
  }, []);

  const fetchApi = (api, setter, storeData) => {
    if (localStorage.getItem(storeData)) {
      setter(JSON.parse(localStorage.getItem(storeData)));
    }
    axios.get(api).then(res => {
      localStorage.setItem(storeData, JSON.stringify(res.data.results));
      setter(res.data.results);
    });
  };

  return (
    <>
      <Header />
      <div className='container-narrow'>
        <section title='Populaire' className='films'>
          <div className='container-narrow'>
            <h2>Films populaire</h2>
            <div className='container-films'>
              {popular.map(movie => {
                return (
                  <div className='movie' key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <span className='screen-reader-text'>{movie.title}</span>
                    <div className='overview'>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section title='Populaire' className='films'>
          <div className='container-narrow'>
            <h2>Les films les mieux notés</h2>
            <div className='container-films'>
              {bestRated.map(movie => {
                return (
                  <div className='movie' key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <span className='screen-reader-text'>{movie.title}</span>
                    <div className='overview'>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section title='Populaire' className='films'>
          <div className='container-narrow'>
            <h2>Les films à venir</h2>
            <div className='container-films'>
              {upComing.map(movie => {
                return (
                  <div className='movie' key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <span className='screen-reader-text'>{movie.title}</span>
                    <div className='overview'>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section title='Populaire' className='films'>
          <div className='container-narrow'>
            <h2>Les films actuellement au cinéma</h2>
            <div className='container-films'>
              {onCinema.map(movie => {
                return (
                  <div className='movie' key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <span className='screen-reader-text'>{movie.title}</span>
                    <div className='overview'>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Movies;
