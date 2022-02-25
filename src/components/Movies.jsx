import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./../layout/Card";
import Header from "../layout/Header";
import { motion } from "framer-motion";

function Movies() {
  const [popular, setPopular] = useState([]);
  const [bestRated, setBestRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [onCinema, setOnCinema] = useState([]);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 1.5,
      }
    },
    out: {
      opacity: 0,
    },
  };

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
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Header />
      <div className='container-narrow'>
        <section title='Populaire' className='films'>
          <div className='container-narrow'>
            <h2>Films populaire</h2>
            <div className='container-films'>
              {popular.map(movie => {
                return (
                  <Card key={ movie.id } data={ movie } />
                );
              })}
            </div>
          </div>
        </section>
        <section title='best-rated' className='films'>
          <div className='container-narrow'>
            <h2>Les films les mieux notés</h2>
            <div className='container-films'>
              {bestRated.map(movie => {
                return (
                  <Card key={ movie.id } data={ movie } />
                );
              })}
            </div>
          </div>
        </section>
        <section title='Prochainement' className='films'>
          <div className='container-narrow'>
            <h2>Les films à venir</h2>
            <div className='container-films'>
              {upComing.map(movie => {
                return (
                  <Card key={ movie.id } data={ movie } />
                );
              })}
            </div>
          </div>
        </section>
        <section title='Cinema' className='films'>
          <div className='container-narrow'>
            <h2>Les films actuellement au cinéma</h2>
            <div className='container-films'>
              {onCinema.map(movie => {
                return (
                  <Card key={ movie.id } data={ movie } />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Movies;
