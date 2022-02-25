import { useState, useEffect } from "react";
import Header from "./layout/Header";
import axios from "axios";

function App() {
  const [popular, setPopular] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchApi(
      "https://api.themoviedb.org/3/movie/popular?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setPopular,
      "popularMovies"
    );

    fetchApi(
      "https://api.themoviedb.org/3/tv/popular?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setSeries,
      "popularSeries"
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
      <section title='Nouveau sur le site' className='films a-venir'>
        <div className='container-narrow'>
          <h2>Séries Populaire</h2>
          <div className='container-films'>
            {series.slice(0, 7).map(serie => {
              return (
                <div className='movie' key={serie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.title}
                  />
                  <span className='screen-reader-text'>{serie.title}</span>
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
